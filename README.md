## DISCLAIMER

THIS phase-1b-marketing SOFTWARE CODE REPOSITORY (“REPOSITORY”) IS MADE AVAILABLE TO YOU BY JETSTREAMGG (“DEVELOPER”). WHILE DEVELOPER GENERATED THE OPEN-SOURCE CODE WITHIN THIS REPOSITORY, DEVELOPER DOES NOT MAINTAIN OR OPERATE ANY SOFTWARE PROTOCOL, PLATFORM, PRODUCT OR SERVICE THAT INCORPORATES SUCH SOURCE CODE.

DEVELOPER MAY, FROM TIME TO TIME, GENERATE, MODIFY AND/OR UPDATE SOURCE CODE WITHIN THIS REPOSITORY BUT IS UNDER NO OBLIGATION TO DO SO. HOWEVER, DEVELOPER WILL NOT PERFORM REPOSITORY MANAGEMENT FUNCTIONS, SUCH AS REVIEWING THIRD-PARTY CONTRIBUTIONS, MANAGING COMMUNITY INTERACTIONS OR HANDLING NON-CODING ADMINISTRATIVE TASKS.

THE SOURCE CODE MADE AVAILABLE VIA THIS REPOSITORY IS OFFERED ON AN “AS-IS,” “AS-AVAILABLE” BASIS WITHOUT ANY REPRESENTATIONS, WARRANTIES OR GUARANTEES OF ANY KIND, EITHER EXPRESS OR IMPLIED. DEVELOPER DISCLAIMS ANY AND ALL LIABILITY FOR ANY ISSUES THAT ARISE FROM THE USE, MODIFICATION OR DISTRIBUTION OF THE SOURCE CODE MADE AVAILABLE VIA THIS REPOSITORY. PLEASE REVIEW, TEST AND AUDIT ANY SOURCE CODE PRIOR TO MAKING USE OF SUCH SOURCE CODE. BY ACCESSING OR USING ANY SOURCE CODE MADE AVAILABLE VIA THIS REPOSITORY, YOU UNDERSTAND, ACKNOWLEDGE AND AGREE TO THE RISKS OF USING THE SOURCE CODE AND THE LIMITED SCOPE OF DEVELOPER’S ROLE AS DESCRIBED HEREIN. YOU AGREE THAT YOU WILL NOT HOLD DEVELOPER LIABLE OR RESPONSIBLE FOR ANY LOSSES OR DAMAGES ARISING FROM YOUR USE OF THE SOURCE CODE MADE AVAILABLE VIA THIS REPOSITORY.

## Reservation of trademark rights

The materials in this repository may include references to our trademarks as well as trademarks owned by other persons. No rights are granted to you to use any trade names, trademarks, service marks, or product names, whether owned by us or by others, except solely as necessary for reasonable and customary use in describing the origin of the source materials. All trademark rights are expressly reserved by the respective owners.

## Sky Marketing Site

### Local set up

- Install [pnpm](https://pnpm.io/installation)
- You'll need Node.js v18.16 or higher (some lower versions of v18 might also work too)
- Copy the `.env example` file into a `.env` file and set up the NPM token
- Install the packages: `pnpm install`
- Run locally: `pnpm dev`

### Environment Variables

To run the application locally, you need to set the following environment variables in your `.env` file:

- `NPM_TOKEN`: Your NPM token.
- `NEXT_PUBLIC_TERMS_LINK`: Array containing links to terms of use
- `NEXT_PUBLIC_FOOTER_LINKS`: Array containing links to show in the footer
- `NEXT_PUBLIC_WEBAPP_URL`: The URL of the webapp
- `API_URL`: The URL of the API service

You can find an example of how to set these in the `.env example` file.

### E2E tests

Running tests in headless mode:

```
pnpm playwright
//or
pnpm e2e //starts dev server first
```

Running tests in UI mode:

First make sure that the env var `NEXT_PUBLIC_USE_MOCK_WALLET=true` is set

Start the dev server locally:

```
pnpm dev
```

Then open the Playwright UI:

```
pnpm playwright --ui
```

or download the [Playwright VS Code extension](https://playwright.dev/docs/getting-started-vscode) and run the tests from VS Code, either headless or with the browser.

The VS code extension can also help with [generating tests](https://playwright.dev/docs/codegen)

to run the app locally with the mock wallet, run `pnpm dev:mock`. And to open a playwright browser to manaully test something, run `pnpm playwright:open`.

### Content Synchronization

The marketing site's FAQ content is managed externally and synchronized from the [corpus repository](https://github.com/sky-ecosystem/corpus). To sync content:

1. Update the commit hash or tag in `.content-version` file
2. Run the sync script: `./scripts/sync-content.sh`
3. The script will:
   - Clone the corpus repository at the specified version
   - Extract website-specific FAQ content
   - Copy FAQs to `app/(main)/faq/faqData/`
   - Format files with Prettier
4. Commit the updated FAQ files
