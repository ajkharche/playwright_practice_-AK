import { test, expect } from '@playwright/test';
import { psLoginPage } from './pageobjectModel/psloginpagePOM.js';
import { psRegistrationPage } from './pageobjectModel/psregistrationpagePOM.js';
import { psHomePage } from './pageobjectModel/pshomepage.js';
import { faker } from '@faker-js/faker';



test('end to end flow practice site', async ({ page }) => {
  test.setTimeout(60000);
  const objLoginPage = new psLoginPage(page);
  const objregistrationPage = new psRegistrationPage(page);
  const objHomePage = new psHomePage(page);
  const email = faker.internet.email();


  await objLoginPage.goto();
  await objLoginPage.click_sign_in_link();
  await objLoginPage.click_Register_link();
  await objregistrationPage.verify_Text_Customer_registration();  //Verify text 'Customer registration'
  await objregistrationPage.user_enter_firstname('Rohit');
  await objregistrationPage.user_enter_lastname('Sharma');
  await objregistrationPage.user_enter_dateofbirth('2000-02-02');
  await objregistrationPage.user_enter_country('Brazil');
  await objregistrationPage.user_enter_postalcode('123654');
  await objregistrationPage.user_enter_housenumber('23');
  await objregistrationPage.user_enter_street('pune');
  await objregistrationPage.user_enter_city('pune');
  await objregistrationPage.user_enter_state('MH');
  await objregistrationPage.user_enter_phonenumber('5252626235');
  await objregistrationPage.user_enter_emailaddress(email);
  await objregistrationPage.user_enter_password('Welcome@656575152');
  await objregistrationPage.click_register();
  await page.waitForTimeout(3000);

  await objLoginPage.user_enter_emailadd(email);
  await objLoginPage.user_enter_password('Welcome@656575152');
  await objLoginPage.click_login_button();
  await page.waitForTimeout(6000);
  
  await page.waitForTimeout(3000);
  await objHomePage.click_home_link();
  await page.waitForTimeout(3000);
  await objHomePage.product_search_Thor_Hammer('Thor Hammer');
  await objHomePage.click_search_button();
  await page.waitForTimeout(2000);
  await objHomePage.click_product();
  await objHomePage.click_addtocart_button();
  await page.waitForTimeout(3000);
  await objHomePage.click_home_link();
  await page.waitForTimeout(3000);

  await objHomePage.product_search_Thor_Hammer('Protective Gloves');
  await objHomePage.click_search_button();
  await page.waitForTimeout(3000);
  await objHomePage.click_Protective_Gloves();
  //await objHomePage.click_addtocart1();
  await objHomePage.click_addtocart_button();
  await page.waitForTimeout(3000);
  await objHomePage.click_home_link();
  
  await objHomePage.product_search_Thor_Hammer('Sheet Sander');
  await objHomePage.click_search_button();
  await page.waitForTimeout(2000);
  await objHomePage.click_product();
  //await objHomePage.click_addtocart1();
  await objHomePage.click_addtocart_button();
  await page.waitForTimeout(3000);
  //await page.waitForTimeout(1000);
  //await page.pause();

  await objHomePage.click_home_link();
  await objHomePage.click_ONCart();


  await page.waitForTimeout(1000);

  //await page.pause();


});