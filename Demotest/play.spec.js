import { test } from '@playwright/test';

test('Add all $10.90 and $14.90 products', async ({ page }) => {

  await page.goto('https://react-shopping-cart-67954.firebaseapp.com/');
  await page.waitForLoadState('networkidle');

  const products = page.locator('div[tabindex="1"]');
  const count = await products.count();

  console.log('Total products:', count);

  for (let i = 0; i < count; i++) {

    const product = products.nth(i);

    // ✅ correct price extraction
    const whole = await product.locator('b').first().textContent();
    const decimal = await product.locator('span').first().textContent();

    if (!whole || !decimal) continue;

    const price = `${whole.trim()}${decimal.trim()}`;

    console.log('Checking price:', price);

    if (price === '10.90' || price === '14.90') {

      const button = product.locator('button');

      await button.waitFor({ state: 'visible' });
      await button.scrollIntoViewIfNeeded();

      // IMPORTANT: force click to avoid overlay/animation issue
      await button.click({ force: true });

      console.log('Clicked:', price);
      await page.waitForTimeout(5000);
    }
  }

});