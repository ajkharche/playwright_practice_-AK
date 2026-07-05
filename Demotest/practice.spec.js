import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import testData from './testData.json';



test('user can login', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
   const email = faker.internet.email();


  await page.getByRole('link',{name:'Sign in'}).click();
  await page.getByRole('link',{name:'Register your account'}).click();
  await expect(page.getByText('Customer registration')).toBeVisible();
  await page.getByLabel('First name').fill(testData.users[0].FN);
  await page.getByLabel('Last name').fill(testData.users[0].LN);
  await page.waitForTimeout(3000);
  await page.getByLabel('Date of Birth').fill(testData.users[0].DOB);
  await page.getByLabel('Country').selectOption('India');
  await page.getByLabel('Postal code').fill('456123');
  await page.getByLabel('House number').fill('25');
  await page.getByLabel('Street').fill('Buldana');
  await expect(page.getByLabel('Street')).toHaveValue('Buldana');
  await page.getByLabel('City').fill('Malkapur');
  await page.getByLabel('State').fill('MH');
  await page.getByLabel('Phone').fill('6251451212');
  await page.getByLabel('Email address').fill(email);

  await page.getByLabel('Password').fill('Test@12598');
  //await page.getByRole('button',{name:'Register '}).click();
  await page.locator('//button[@data-test="register-submit"]').click();
  await page.waitForTimeout(3000);
  await expect(page).toHaveURL('https://practicesoftwaretesting.com/auth/login');
  await page.getByLabel('Email address').fill(email);
  //await page.getByLabel('Password').fill('Test@12598');
  await page.locator('//input[@id="password"]').fill('Test@12598');
  await page.getByRole('button',{name:'Login'}).click();
  await page.waitForTimeout(6000);
  
});


