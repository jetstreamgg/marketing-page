/*
This file should be imported in every e2e test file
*/
import { Page, expect, test } from '@playwright/test';

const urlToInput = 'https://twitter.com/sparkdotfi/status/1716490917488611572'; //random tweet

const errorLogs = [] as string[];

test.beforeEach(async ({ page }) => {
  //store errors from console
  errorLogs.length = 0;
  page.on('console', message => {
    if (message.type() === 'error') {
      errorLogs.push(message.text());
    }
  });
  // Intercept VPN check and mock response
  await page.route('https://api.ipify.org/?format=json', route => {
    setTimeout(() => {
      route.fulfill({
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        contentType: 'application/json',
        body: JSON.stringify({ ip: '0.0.0.0' })
      });
    }, 500);
  });

  await page.route('**/ip/status?ip=*', route => {
    setTimeout(() => {
      route.fulfill({
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        contentType: 'application/json',
        body: JSON.stringify({
          is_vpn: false,
          is_restricted_region: false
        })
      });
    }, 500);
  });
});

test.afterEach(async () => {
  //signature rejection errors in console are expected
  const filteredErrorLogs = errorLogs.filter(log => !log.includes('reject sign'));
  expect(filteredErrorLogs).toEqual([]);
});

export const reject = async (fn: () => Promise<void>, page: Page) => {
  await page.getByTestId('activate-reject-wallet').dispatchEvent('click');
  await fn();
  await page.getByTestId('deactivate-reject-wallet').dispatchEvent('click');
};

export const connectWalletFromStepTwo = async (page: Page) => {
  //TODO: why isn't it working to get this button by data-testid?
  //await page.getByTestId('step-two-button').click();
  await page
    .locator('div')
    .filter({ hasText: /^Connect Wallet$/ })
    .getByRole('button')
    .nth(1)
    .click();
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByTestId('rk-wallet-option-mock').click();
};

export const connectWalletFromHeader = async (page: Page) => {
  await page.getByRole('button', { name: 'Connect Wallet' }).click();
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByTestId('rk-wallet-option-mock').click();
};

export const goToRegisterPage = async (page: Page) => {
  await page.getByText(/I Want To Be First/i).click();
  await expect(page.getByText('Follow the steps and get the rewards')).toBeVisible({ timeout: 25000 });
};

export const handleTwitterPopups = async (page: Page) => {
  const twitterPage1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Follow @skymoneyglobal' }).click();
  const twitterPage1 = await twitterPage1Promise;
  await twitterPage1.close();

  const twitterPage2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Post' }).click();
  const twitterPage2 = await twitterPage2Promise;
  await twitterPage2.close();
};

export const verifyTweetUrl = async (page: Page) => {
  await page.locator('input').click();
  await page.locator('input').fill(urlToInput);
  await page.getByRole('button', { name: 'Verify' }).click();
};

export const finish = async (page: Page) => {
  await page.getByRole('button', { name: 'Got it' }).click();
  await expect(page.locator(':text("all set and have been added to receive rewards")')).toBeVisible();
};
