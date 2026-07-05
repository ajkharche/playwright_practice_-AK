
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    page.goto('https://practicesoftwaretesting.com/');
  
  await page.locator('[data-test="nav-home"]').click();
 
  await page.locator('[data-test="search-query"]').click();
  await page.locator('[data-test="search-query"]').fill('Protective Gloves');
  await page.locator('[data-test="search-submit"]').click();
  await page.locator('[data-test="product-01KWC6DPHXBV5HAYM2VSDSVZ7G"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="nav-home"]').click();
});