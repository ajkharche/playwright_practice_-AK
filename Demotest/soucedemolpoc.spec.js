const { test, expect } = require('@playwright/test');

test('demosouce', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  const a1 =  page.locator('//input[@placeholder="Username"]')
  await a1.fill('standard_user');

  await page.locator('//input[@placeholder="Password"]').fill('secret_sauce');

  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
  
  await page.getByText('Sauce Labs Backpack').click();

  await page.getByRole('button' ,{name:'Add to cart'} ).click();
  await expect(page.getByRole('button',{name:'Remove'})).toBeVisible();
  await page.locator('//a[@data-test="shopping-cart-link"]').click();
  await page.waitForTimeout(3000);
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
    await expect(page.getByRole('button',{name : 'Checkout'})).toBeVisible();
    await expect(page.getByRole('button',{name:'Continue Shopping'})).toBeVisible();
    await expect(page.getByText('$29.99')).toBeVisible();
    await page.getByRole('button',{name:'Checkout'}).click();
    await page.getByPlaceholder('First Name').fill('Demo');
    await page.getByPlaceholder('Last Name').fill('test');
    await page.getByPlaceholder('Zip/Postal Code').fill('125492');
    await page.getByRole('button',{name:'continue'}).click();
    await expect(page.getByRole('button',{name:'cancel'})).toBeVisible();
    await expect(page.getByText('Payment Information:')).toBeVisible();
    await expect(page.getByText('Shipping Information')).toBeVisible();
    await expect(page.getByText('Price Total')).toBeVisible();
    await page.getByRole('button',{name:'Finish'}).click();
    await expect(page.getByText('Thank you for your order!')).toBeVisible();
    await expect(page.getByText('Your order has been dispatched, and will arrive just as fast as the pony can get there!')).toBeVisible();
    await expect(page.getByText('Checkout: Complete!')).toBeVisible();
    await page.waitForTimeout(3000);
});