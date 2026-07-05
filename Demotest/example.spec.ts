import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';


test('has title', async ({ page }) => {
  await page.goto('https://automationexercise.com/login');
  const firstname = faker.internet.username();
  const email = faker.internet.email();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Automation Exercise - Signup / Login");
  await page.locator("//input[@name='name']").describe('enter name').fill(firstname);
  
await page.locator('[data-qa="signup-email"]').describe('enter Email').fill(email);
await page.locator('[data-qa="signup-button"]').click()
await expect(page.getByText('Enter Account Information')).toBeVisible()
await page.waitForTimeout(2000);
await page.locator("//select[@name='days']").selectOption('3');
await page.waitForTimeout(2000);
await page.locator("//select[@name='months']").selectOption('March');
await page.waitForTimeout(2000);
await page.locator("//select[@name='years']").selectOption('1998');
await page.locator("//input[@value='Mr']").check();
await page.waitForTimeout(2000);
await page.locator("//input[@id='mobile_number']").fill('6523568956');
await page.locator("//input[@id='zipcode']").fill('236589');
await page.locator("//input[@id='city']").fill('pune');
//await page.locator("//input[@id='mobile_number']").fill('6523568956');

await page.locator('text=Create Account').scrollIntoViewIfNeeded();

await expect(page.getByRole('button', { name: 'Create Account' })).toBeVisible();

// Click the "Create Account" button
await page.locator('text=Create Account').scrollIntoViewIfNeeded();
await page.waitForTimeout(2000);

await page.getByRole('button', { name: 'Create Account' }).click();
await page.waitForTimeout(2000);



});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
