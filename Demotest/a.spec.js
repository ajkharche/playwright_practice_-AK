import { test } from '@playwright/test';

import { ShoppingCartPage } from './pageobjectModel/practiceshopping.js';

test('Shopping Cart Validation', async ({ page }) => {

    const cart = new ShoppingCartPage(page);

    await cart.navigate();

    await cart.addFirstProduct();

    await cart.addBatmanProduct();

    await cart.addRingerHallPass();

    await cart.addTurtleProduct();

    await cart.addGreyTshirt();

    await cart.addBlackTshirt();

    await page.waitForTimeout(3000);

});