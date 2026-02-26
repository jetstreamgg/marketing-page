# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is the Sky ecosystem marketing website, a Next.js 15 application that serves as the public-facing marketing site. The site integrates with the Sky Protocol and provides information about USDS stablecoin, Sky Token rewards, and various DeFi features. Content is synchronized from a centralized corpus repository to maintain consistency across the ecosystem.

## Common Development Commands

### Development

- `pnpm dev` - Start development server on http://localhost:3000
- `pnpm dev:mock` - Start with mock wallet enabled (sets NEXT_PUBLIC_USE_MOCK_WALLET=true)
- `pnpm build` - Build for production
- `pnpm start` - Start production server

### Code Quality

- `pnpm lint` - Run ESLint
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm prettier` - Format all files with Prettier
- `pnpm knip` - Check for unused dependencies

### Testing

- `pnpm e2e` - Run E2E tests (starts dev server automatically with mock wallet)
- `pnpm playwright` - Run Playwright tests directly (requires running server)
- `pnpm playwright --ui` - Run tests with Playwright UI
- `pnpm playwright:open` - Open Playwright browser for manual testing

To run a specific test file:

```bash
pnpm playwright test e2e/homepage.spec.ts
```

### Content Synchronization

- `./scripts/sync-content.sh` - Sync FAQ and tooltips content from the corpus repository
- Content version controlled via `.content-version` file (contains commit hash/tag)
- FAQs are synced to `app/(main)/faq/faqData/`
- Tooltips are synced to `app/data/tooltips.ts`

## Architecture Overview

This is a Next.js 15 marketing website built with the App Router pattern. The codebase follows a component-driven architecture with clear separation between shared components and page-specific implementations.

### Key Architectural Patterns

1. **Route Organization**: Uses route groups `(main)` and `(legal)` to organize pages without affecting URLs. Main marketing pages live under `(main)` while legal documents are under `(legal)`.

2. **State Management**:
   - Server state: TanStack Query (React Query) for API data fetching
   - Client state: Custom AppContext for UI state (modals, loading states, theme)
   - No Redux or Zustand - keep state management simple

3. **Component Structure**:
   - Shared components in `/app/components/`
   - UI primitives (built on Radix UI) in `/app/components/ui/`
   - Page-specific components co-located with their routes
   - All components use TypeScript with proper type definitions

4. **Styling System**:
   - Tailwind CSS with extensive custom configuration
   - `tailwind-variants` for component variants
   - Design tokens defined in tailwind.config.js
   - Responsive breakpoints: mobile, tablet, desktop, desktop-xl

5. **Animation Strategy**:
   - Framer Motion for complex animations
   - CSS animations via Tailwind for simple transitions
   - Video backgrounds with performance optimizations

### Important Context Patterns

The AppContext (`/app/context/AppContext.tsx`) manages global UI state. When adding new global state:

1. Add to the context interface
2. Initialize in the provider
3. Export typed hooks for consumption

### API Integration

- Uses React Query for data fetching
- API routes defined in `/app/api/`
- External APIs configured with strict CSP headers
- Environment variables control API endpoints

### Testing Philosophy

- E2E tests focus on critical user journeys
- Mock wallet enabled for consistent test environments
- Tests run in parallel locally, sequentially on CI
- Trace collection on test failures

### Security Considerations

- Strict Content Security Policy in next.config.js
- Sanitized markdown rendering for user content
- Environment variables for sensitive configuration
- No secrets in code - use .env files

## Development Workflow

1. Always run `pnpm typecheck` and `pnpm lint` before committing
2. Pre-commit hooks will auto-format with Prettier
3. Use mock wallet (`pnpm dev:mock`) when testing wallet features
4. Check responsive design at all breakpoints
5. Test animations on slower devices/connections

## Content Management

### Synced Content

The marketing site's FAQ and tooltips content is managed externally in the corpus repository and synced via automation:

1. **Content Source**: Content originates from `github.com/sky-ecosystem/corpus`
2. **Version Control**: The `.content-version` file specifies which corpus version to use
3. **Sync Process**: The `scripts/sync-content.sh` script:
   - Clones the corpus repo at the specified version
   - Runs the website extraction script to generate content files
   - Copies FAQ content from `output/website/faqs/` to `app/(main)/faq/faqData/`
   - Copies tooltips from `output/website/tooltips/tooltips.ts` to `app/data/tooltips.ts`
   - Formats files with Prettier for consistency
4. **Locations**:
   - FAQs: `app/(main)/faq/faqData/`
   - Tooltips: `app/data/tooltips.ts`

### Updating Content

To update synced content:

1. Update the commit hash/tag in `.content-version`
2. Run `./scripts/sync-content.sh`
3. Commit the updated files

Note: The sync script will gracefully skip if authentication or network issues occur, using existing content as fallback.

## Code Style Guidelines

- Use TypeScript strict mode - no `any` types
- Prefer function components with hooks
- Co-locate related code (component + styles + types)
- Use descriptive variable names
- Keep components focused and composable

## Sentry / Error Monitoring

This project uses Sentry (`@sentry/nextjs`) for error tracking, performance monitoring, and session replay.

### Configuration Files

| File                        | Purpose                                               |
| --------------------------- | ----------------------------------------------------- |
| `instrumentation-client.ts` | Browser-side initialization (Turbopack compatible)    |
| `sentry.server.config.ts`   | Server-side initialization (Node.js runtime)          |
| `sentry.edge.config.ts`     | Edge runtime initialization (middleware, edge routes) |
| `instrumentation.ts`        | Next.js 15 instrumentation hook (server/edge loader)  |

### Exception Catching

When catching errors that should be reported to Sentry, use `Sentry.captureException`:

```typescript
import * as Sentry from '@sentry/nextjs';

try {
  await riskyOperation();
} catch (error) {
  Sentry.captureException(error, {
    tags: { component: 'MyComponent' },
    extra: { userId: user.id }
  });
  throw error; // Re-throw if needed
}
```

### Custom Tracing

Add custom spans to track specific operations:

```typescript
import * as Sentry from '@sentry/nextjs';

// UI action tracing
async function handleSubmit() {
  return Sentry.startSpan({ name: 'form.submit', op: 'ui.action' }, async () => {
    await submitForm();
  });
}

// API call tracing
async function fetchData() {
  return Sentry.startSpan({ name: 'api.fetchData', op: 'http.client' }, async () => {
    return await fetch('/api/data');
  });
}
```

### Sentry Logger

Use `Sentry.logger` for structured logging that appears in Sentry:

```typescript
import * as Sentry from '@sentry/nextjs';

const logger = Sentry.logger;

logger.info('User logged in', { userId: user.id });
logger.warn('Rate limit approaching', { remaining: 10 });
logger.error('Payment failed', { orderId, reason });
```

### Web3 Error Tagging

When capturing Web3-specific errors, use consistent tags:

```typescript
Sentry.captureException(error, {
  tags: {
    type: 'rpc_error', // simulation_failure, wallet_error, subgraph_error
    chain_id: chainId,
    contract: contractAddress,
    error_code: error.code
  }
});
```

### Development vs Production

- Events are **not sent** in development unless `NEXT_PUBLIC_SENTRY_DEBUG=true`
- Session replay masks all text and blocks media for privacy
- 10% of client transactions sampled; 100% on server/edge
