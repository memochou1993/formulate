import { expect, test } from '@playwright/test';

test.describe('Formulate', () => {
  test('should have the title', async ({ page }) => {
    await page.goto('/');

    await expect(page)
      .toHaveTitle(/Formulate/);
  });

  test('should validate the form', async ({ page }) => {
    await page.goto('/');

    await page.fill('input', '@');

    expect(await page.locator('.v-messages__message').textContent())
      .toBe('The input field must only contain letters, numbers, dashes and underscores.');
  });
});
