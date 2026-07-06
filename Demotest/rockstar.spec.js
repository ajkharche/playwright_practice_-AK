import { test, expect } from '@playwright/test';
import { LoginPage } from './pageobjectModel/loginpage.js';
import { HomePage } from './pageobjectModel/homepage.js';
import { AddCart, CartPage } from './pageobjectModel/addtocartpage.js';
import { LogoutPage } from './pageobjectModel/logoutpage.js';

test('User can log in successfully', async ({ page }) => {
  const objLoginPage = new LoginPage(page);

  await objLoginPage.goto();
  await objLoginPage.user_enter_username('standard_user');
  await objLoginPage.user_enter_password('secret_sauce');
  await objLoginPage.click_login();

  await expect(page).toHaveURL(/inventory/);
});

test('Home page product selection', async ({ page }) => {
  const objLoginPage = new LoginPage(page);
  const objHomePage = new HomePage(page);

  await objLoginPage.goto();
  await objLoginPage.user_enter_username('standard_user');
  await objLoginPage.user_enter_password('secret_sauce');
  await objLoginPage.click_login();

  await objHomePage.selectProduct1();
});

test('Add product to cart', async ({ page }) => {
  const objLoginPage = new LoginPage(page);
  const objHomePage = new HomePage(page);
  const objCartPage = new AddCart(page);
  const objlogoutPage = new LogoutPage(page);

  await objLoginPage.goto();
  await objLoginPage.user_enter_username('standard_user');
  await objLoginPage.user_enter_password('secret_sauce');
  await objLoginPage.click_login();

  await objHomePage.selectProduct1();
  await expect(await objCartPage.getProduct()).toBeVisible();
  await objCartPage.addToCart();
  await objCartPage.mycartpersonal();
  await expect(await objCartPage.removebuttonverify()).toBeVisible();
  await expect(await objCartPage.Continueshoppingbutton_verify()).toBeVisible();
  await expect(await objCartPage.checkoutbutton_verify()).toBeVisible();
  await objCartPage.checkoutbutton_click();
  await objCartPage.enter_first_name('Virat');
  await objCartPage.enter_last_name('Sharma');
  await objCartPage.enter_pin_code('569213');
  await objCartPage.Click_countinue_button();
  await expect(await objCartPage.getProduct()).toBeVisible();
  await expect(await objCartPage.payment_info()).toBeVisible();
  await expect(await objCartPage.ship_info()).toBeVisible();
  await expect(await objCartPage.total_price()).toBeVisible();
  await expect(await objCartPage.item_total()).toBeVisible();
  await expect(await objCartPage.total()).toBeVisible();
  await objCartPage.click_finish_button();
  await expect(await objCartPage.verify_text1()).toBeVisible();
  await expect(await objCartPage.verify_text2()).toBeVisible();
  await expect(await objCartPage.verify_text3()).toBeVisible();
  await expect(await objCartPage.verify_back_to_homebutton()).toBeVisible();
  await page.waitForTimeout(3000);
  await objCartPage.mycartpersonal();
  await expect(await objCartPage.getProduct()).not.toBeVisible(); //Verify Product is not available in cart
  await objlogoutPage.click_Open_Menu();      //click open menu
  await objlogoutPage.click_logout_link();    //click logout link
  await expect(await objlogoutPage.txt_username).toBeVisible(); // verify text in login page -Accepted usernames are:

  await expect(await objlogoutPage.txt_password).toBeVisible();  // // verify text in login page Password for all users:


  await page.waitForTimeout(3000);
});