import { test, expect } from '@playwright/test';
import testData from './testData.json';

for (const data of testData.users) {

  test(data.testCase, async ({ page }) => {
    test.setTimeout(60000);


    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', data.username);
    await page.fill('#password', data.password);
    //page.waitForTimeout(1000);

    await page.click('#login-button');

    if (data.expected === 'success') {
      await expect(page).toHaveURL(/inventory/);
    } else {
      await expect(page.locator('[data-test="error"]')).toBeVisible();
    }
  });
}