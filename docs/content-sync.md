# Content Sync Documentation

This document describes the content synchronization process between the marketing page and the sky-data repository.

## Overview

The marketing page pulls FAQ content from the [sky-data repository](https://github.com/archon-research/sky-data) at build time. This ensures content stays up-to-date while maintaining version control.

## Local Development

### Initial Setup

1. The `.content-version` file specifies which version of content to use
2. Run `pnpm sync-content` to fetch and extract FAQ content
3. Content will be placed in `app/(main)/faq/`

### Commands

```bash
# Sync content from the pinned version
pnpm sync-content

# Check available versions and update
pnpm bump-content-version

# Update to a specific version
pnpm bump-content-version <commit-hash|tag|branch>

# Build (automatically syncs content first)
pnpm build
```

## How It Works

1. **Version Control**: The `.content-version` file contains a commit hash, tag, or branch name
2. **Sync Process**:
   - Clones the sky-data repository at the specified version
   - Runs `extract_website_faqs.js` in the content repo
   - Copies generated files from `output/website/*` to `app/(main)/faq/`
   - Cleans up temporary files
3. **Build Integration**: The `prebuild` script automatically syncs content before building

## Workflow

### Updating Content

1. Check available versions:

   ```bash
   pnpm bump-content-version
   ```

2. Update to a new version:

   ```bash
   pnpm bump-content-version <version>
   ```

3. Sync and review changes:

   ```bash
   pnpm sync-content
   git diff app/(main)/faq/
   ```

4. Commit both the version file and content:
   ```bash
   git add .content-version app/(main)/faq/
   git commit -m "Update FAQ content to <version>"
   ```

## CI/CD Integration

### GitHub Actions Example

```yaml
name: Build and Deploy

on:
  push:
    branches: [main]
  pull_request:

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: pnpm/action-setup@v2
        with:
          version: 8

      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'pnpm'

      - name: Install dependencies
        run: pnpm install

      - name: Sync content
        run: pnpm sync-content

      - name: Build
        run: pnpm build

      - name: Upload build artifacts
        uses: actions/upload-artifact@v3
        with:
          name: build-output
          path: .next/
```

### Vercel Integration

For Vercel deployments, the content sync happens automatically during the build process via the `prebuild` script. No additional configuration needed.

### Docker Example

```dockerfile
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat git
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
COPY .content-version ./
COPY scripts/ ./scripts/
RUN corepack enable && pnpm install --frozen-lockfile

FROM node:18-alpine AS builder
RUN apk add --no-cache git
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Content sync happens automatically via prebuild
RUN corepack enable && pnpm build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
```

## Best Practices

1. **Version Pinning**: Always use specific commit hashes in production
2. **Review Changes**: Review content changes before deploying
3. **Commit Together**: Commit `.content-version` and synced content together
4. **CI Cache**: Consider caching the content repo in CI for faster builds

## Troubleshooting

### Common Issues

1. **Script not found**: Ensure scripts have execute permissions

   ```bash
   chmod +x scripts/*.sh
   ```

2. **Node not found**: The content repo script requires Node.js

   ```bash
   node --version  # Should be v18.16 or higher
   ```

3. **Git authentication**: The scripts use SSH authentication by default
   - Ensure your SSH keys are configured: `ssh -T git@github.com`
   - For CI environments, use deploy keys or set `CONTENT_REPO_URL` to use HTTPS with tokens
   - To use a different repo URL: `CONTENT_REPO_URL=https://token@github.com/org/repo.git pnpm sync-content`

### Debug Mode

To see detailed output, modify the sync script or run commands manually:

```bash
# Manual sync with verbose output
git clone https://github.com/archon-research/sky-data.git .tmp-content-repo
cd .tmp-content-repo
git checkout $(cat ../.content-version)
node extract_website_faqs.js
```

## Security Considerations

1. The content repo is public, no authentication needed
2. Content is sanitized when rendered (via rehype-sanitize)
3. No secrets or credentials are stored in `.content-version`
4. Temporary directories are cleaned up after sync
