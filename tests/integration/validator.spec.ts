import { expect, test } from '@playwright/test';

test.describe('Formulate', () => {
  test('Page should have the correct title', async ({ page }) => {
    await page.goto('/');

    await expect(page)
      .toHaveTitle(/Formulate/);
  });

  test('Input should trigger validation error', async ({ page }) => {
    await page.goto('/');

    await page.fill('input', '@');

    expect(await page.locator('.v-messages__message').textContent())
      .toBe('The input field must only contain letters, numbers, dashes and underscores.');
  });
});
