import { test } from '@playwright/test';

test('Shopping Cart Validation', async ({ page }) => {

await page.goto('https://react-shopping-cart-67954.firebaseapp.com/');
 await page.locator("//p[text()='Cropped Stay Groovy Off white']/following::button[text()='Add to cart'][1]").click();

  await page.waitForTimeout(6000);

});

