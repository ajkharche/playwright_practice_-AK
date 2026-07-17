import { test } from '@playwright/test';
import { ShoppingPage } from '../../Pages/ShoppingPage';
import testData from '../../Data/TestData.json';

test.describe('Shopping Cart Product Verification', () => {


  test('Verify displayed product prices are between $10.90 and $14.90', async ({ page }) => {

    const shoppingPage = new ShoppingPage(page);

    await shoppingPage.navigateToURL(testData.URL);

    await shoppingPage.waitForProductsToLoad();

    await shoppingPage.verifyProductsBetweenPriceRange(10.90, 14.90);
    
    await shoppingPage.addProductsBetweenPriceRange(10.90, 14.90);

    await shoppingPage.clickOnOpenCartButton();
    const cartProducts = await shoppingPage.getCartProducts();
    console.log(cartProducts);

    const cartSummary = await shoppingPage.getCartSummary();
    console.log(cartSummary);
  });

});