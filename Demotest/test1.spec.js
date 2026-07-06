
import { test, expect } from '@playwright/test';

test.use({
    storageState: 'storageState.json'
});

test('Open application without logging in', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/inventory.html');

    //await expect(page).toHaveURL(/inventory/)
    //page.waitForTimeout(2000);

});