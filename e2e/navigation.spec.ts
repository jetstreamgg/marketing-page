import { test, expect } from '@playwright/test';

const gotoOptions = { waitUntil: 'domcontentloaded' as const };

test.describe('Page routes load correctly', () => {
  test('homepage loads', async ({ page }) => {
    const response = await page.goto('/', gotoOptions);
    expect(response?.status()).toBe(200);
    await expect(page.locator('header')).toBeVisible();
  });

  test('features page loads', async ({ page }) => {
    const response = await page.goto('/features', gotoOptions);
    expect(response?.status()).toBe(200);
    await expect(page.locator('header')).toBeVisible();
  });

  test('FAQ page loads', async ({ page }) => {
    const response = await page.goto('/faq', gotoOptions);
    expect(response?.status()).toBe(200);
    await expect(page.locator('header')).toBeVisible();
  });
});

test.describe('404 handling', () => {
  test('unknown route does not return 200', async ({ page }) => {
    const response = await page.goto('/this-page-does-not-exist', gotoOptions);
    expect(response?.status()).not.toBe(200);
  });

  test('deeply nested unknown route does not return 200', async ({ page }) => {
    const response = await page.goto('/some/deeply/nested/path', gotoOptions);
    expect(response?.status()).not.toBe(200);
  });

  // Common mistyped or stale URLs that should not resolve to a valid page
  const staleRoutes = [
    '/feature',
    '/faqs',
    '/about',
    '/home',
    '/contact',
    '/register',
    '/upgrade',
    '/trade',
    '/rewards',
    '/savings',
    '/stake',
    '/vaults'
  ];

  for (const route of staleRoutes) {
    test(`${route} does not return 200`, async ({ page }) => {
      const response = await page.goto(route, gotoOptions);
      expect(response?.status()).not.toBe(200);
    });
  }
});

test.describe('Redirects', () => {
  test('/careers redirects to Ashby job board', async ({ page }) => {
    await page.goto('/careers');
    expect(page.url()).toContain('jobs.ashbyhq.com/skyecosystem');
  });
});

test.describe('Footer internal links', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/', gotoOptions);
    // Scroll to footer to ensure it's rendered
    await page.evaluate(() => {
      const scrollContainer = document.querySelector('[data-scroll-container]') || document.documentElement;
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    });
  });

  const footerInternalLinks = [
    { title: 'All Features', expectedHref: '/features' },
    { title: 'FAQs', expectedHref: '/faq' }
  ];

  for (const { title, expectedHref } of footerInternalLinks) {
    test(`"${title}" footer link points to ${expectedHref}`, async ({ page }) => {
      const footer = page.locator('footer, [class*="bg-dark"]').last();
      const link = footer.getByRole('link', { name: title, exact: true }).first();
      await expect(link).toBeVisible({ timeout: 10000 });
      const href = await link.getAttribute('href');
      expect(href).toBe(expectedHref);
    });
  }

  const footerHashLinks = [
    { title: 'Upgrade', expectedHref: '/features#upgrade' },
    { title: 'Trade', expectedHref: '/features#trade' },
    { title: 'Sky Token Rewards', expectedHref: '/features#rewards' },
    { title: 'Sky Savings Rate', expectedHref: '/features#savings' },
    { title: 'Staking Engine', expectedHref: '/features#stake' },
    { title: 'Vaults', expectedHref: '/features#vaults' },
    { title: 'Expert', expectedHref: '/features#expert' },
    { title: 'SkyLink', expectedHref: '/features#skylink' }
  ];

  for (const { title, expectedHref } of footerHashLinks) {
    test(`"${title}" footer link points to ${expectedHref}`, async ({ page }) => {
      const footer = page.locator('footer, [class*="bg-dark"]').last();
      const link = footer.getByRole('link', { name: title, exact: true }).first();
      await expect(link).toBeVisible({ timeout: 10000 });
      const href = await link.getAttribute('href');
      expect(href).toBe(expectedHref);
    });
  }
});

test.describe('Header navigation', () => {
  test('header logo links to homepage', async ({ page }) => {
    await page.goto('/features', gotoOptions);
    const logo = page.locator('header a').first();
    const href = await logo.getAttribute('href');
    expect(href).toBe('/');
  });
});

test.describe('Launch App links', () => {
  test('hero "Launch App" button links to app.sky.money', async ({ page }) => {
    await page.goto('/', gotoOptions);
    const heroLink = page.getByRole('link', { name: /Launch App/i }).first();
    await expect(heroLink).toBeVisible({ timeout: 10000 });
    const href = await heroLink.getAttribute('href');
    expect(href).toContain('app.sky.money');
  });

  test('footer "Launch app" button links to app.sky.money', async ({ page }) => {
    await page.goto('/', gotoOptions);
    await page.evaluate(() => {
      const scrollContainer = document.querySelector('[data-scroll-container]') || document.documentElement;
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    });
    const footer = page.locator('footer, [class*="bg-dark"]').last();
    const link = footer.getByRole('link', { name: /Launch app/i }).first();
    await expect(link).toBeVisible({ timeout: 10000 });
    const href = await link.getAttribute('href');
    expect(href).toContain('app.sky.money');
  });

  test('FAQ page "Launch app" button links to app.sky.money', async ({ page }) => {
    await page.goto('/faq', gotoOptions);
    const link = page.getByRole('link', { name: /Launch app/i }).first();
    await expect(link).toBeVisible({ timeout: 10000 });
    const href = await link.getAttribute('href');
    expect(href).toContain('app.sky.money');
  });
});

test.describe('Feature hash anchors', () => {
  const sections = ['upgrade', 'trade', 'rewards', 'savings', 'stake', 'vaults', 'expert', 'skylink'];

  for (const section of sections) {
    test(`/features#${section} loads features page`, async ({ page }) => {
      const response = await page.goto(`/features#${section}`, gotoOptions);
      expect(response?.status()).toBe(200);
      expect(page.url()).toContain(`/features#${section}`);
    });
  }
});
