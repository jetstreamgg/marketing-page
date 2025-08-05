#!/usr/bin/env bash

# Exit on any error
set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
# Use SSH URL for authentication, or override with CONTENT_REPO_URL env var
CONTENT_REPO="${CONTENT_REPO_URL:-git@github.com:archon-research/sky-data.git}"
CONTENT_VERSION_FILE=".content-version"
TEMP_DIR=".tmp-version-check"

# Function to print colored output
print_status() {
    echo -e "${GREEN}[BUMP]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

# Function to show usage
show_usage() {
    echo "Usage: $0 [version]"
    echo ""
    echo "Options:"
    echo "  version    The commit hash, tag, or branch to update to"
    echo "             If not provided, will show latest commits from main branch"
    echo ""
    echo "Examples:"
    echo "  $0                    # Show latest commits"
    echo "  $0 abc123f            # Update to specific commit"
    echo "  $0 v1.2.3             # Update to specific tag"
    echo "  $0 feature/new-faqs   # Update to specific branch"
}

# Check current version
if [ -f "$CONTENT_VERSION_FILE" ]; then
    CURRENT_VERSION=$(cat "$CONTENT_VERSION_FILE" | tr -d '[:space:]')
    print_info "Current version: $CURRENT_VERSION"
else
    print_error "Content version file '$CONTENT_VERSION_FILE' not found!"
    CURRENT_VERSION="none"
fi

# If no argument provided, show recent commits
if [ $# -eq 0 ]; then
    print_status "Fetching latest commits from content repository..."
    
    # Clone repository temporarily to check commits
    git clone --quiet --depth 20 "$CONTENT_REPO" "$TEMP_DIR"
    cd "$TEMP_DIR"
    
    echo ""
    print_info "Recent commits on main branch:"
    echo ""
    
    # Show recent commits
    git log --oneline -10 --pretty=format:"  %C(yellow)%h%C(reset) - %s %C(dim)(%cr by %an)%C(reset)"
    echo ""
    echo ""
    
    # Show available tags
    print_info "Available tags:"
    git tag -l | tail -10 | while read tag; do
        echo "  - $tag"
    done
    
    # Cleanup
    cd ..
    rm -rf "$TEMP_DIR"
    
    echo ""
    print_info "To update, run: $0 <version>"
    exit 0
fi

NEW_VERSION="$1"

# Validate the new version exists in the repository
print_status "Validating version '$NEW_VERSION' exists in repository..."

# Clone repository temporarily to validate
git clone --quiet --no-checkout "$CONTENT_REPO" "$TEMP_DIR"
cd "$TEMP_DIR"

# Try to checkout the version
if git checkout --quiet "$NEW_VERSION" 2>/dev/null; then
    # Get the full commit hash
    FULL_HASH=$(git rev-parse HEAD)
    print_status "Version validated: $NEW_VERSION (commit: $FULL_HASH)"
    
    # Go back to project root
    cd ..
    
    # Update the version file
    echo "$NEW_VERSION" > "$CONTENT_VERSION_FILE"
    print_status "Updated $CONTENT_VERSION_FILE from '$CURRENT_VERSION' to '$NEW_VERSION'"
    
    # Cleanup
    rm -rf "$TEMP_DIR"
    
    echo ""
    print_info "Next steps:"
    echo "  1. Run 'pnpm sync-content' to fetch the new content"
    echo "  2. Review the changes"
    echo "  3. Commit both .content-version and any updated FAQ files"
    
else
    print_error "Version '$NEW_VERSION' not found in repository!"
    print_error "Please specify a valid commit hash, tag, or branch name."
    cd ..
    rm -rf "$TEMP_DIR"
    exit 1
fi