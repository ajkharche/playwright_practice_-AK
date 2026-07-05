import { test, expect } from '@playwright/test';


 [
  { username: 'standard_user', password: 'secret_sauce' },
  { username: 'problem_user', password: 'secret_sauce' },
  { username: 'performance_glitch_user', password: 'secret_sauce' },
]
.forEach(({ username, password }) => {
  test('test para  ' +username, async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator("//input[@name='user-name']").fill(username);
    await page.locator("//input[@name='password']").fill(password);
    await page.locator("//input[@name='login-button']").click();
    const tittle= await page.title();
    console.log(tittle);

    const url = await page.url();
    console.log(url);

    await expect(page).toHaveURL(/inventory.html/);
  });
});
