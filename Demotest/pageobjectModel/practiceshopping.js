import { expect } from '@playwright/test';

export class ShoppingCartPage {

    constructor(page) {
        this.page = page;

        this.addToCartBtn = page.getByRole('button', { name: 'Add to cart' });
        this.removeBtn = page.getByRole('button', { name: 'X' });
    }

    async navigate(){

        await this.page.goto('https://react-shopping-cart-67954.firebaseapp.com/');
    }

    async CroppedStayGroovyoffwhite() {

        await expect(this.page.getByText('Cropped Stay Groovy off white')).toBeVisible();

        await this.addToCartBtn.first().click();

        await expect(this.page.getByText('Cropped Stay Groovy off white').nth(1)).toBeVisible();

        await expect(this.page.getByText('$ 10.90').first()).toBeVisible();

        await expect(this.page.getByText('X | White T-shirt Quantity:')).toBeVisible();

        await expect(this.page.getByRole('paragraph').filter({ hasText: /^\$ 10\.90$/ })).toBeVisible();

    }

    async addBatmanProduct() {

        await expect(this.page.getByText('Black Batman T-shirt')).toBeVisible();

        await this.addToCartBtn.nth(4).click();

        await expect(this.page.getByText('Black Batman T-shirt').nth(1)).toBeVisible();

        
        await expect(this.page.getByText('S | Really Cool T-shirt')).toBeVisible();
        await expect(this.page.getByText('$ 10.90').nth(1)).toBeVisible();
        await expect(this.page.getByText('$ 21.80')).toBeVisible();

    }

    async addRingerHallPass() {

        await this.removeBtn.click();

        await expect(this.page.getByText('Ringer Hall Pass')).toBeVisible();

        await this.page.locator('.sc-124al1g-2.ctLSpw > .sc-124al1g-0').click();

        await expect(this.page.getByText('Ringer Hall Pass').nth(1)).toBeVisible();

        
        await expect(this.page.getByText('X | White T-shirt Quantity:').nth(1)).toBeVisible();
        await expect(this.page.getByText('$ 10.90').nth(2)).toBeVisible();
        await expect(this.page.getByText('$ 32.70')).toBeVisible();

    }

    async addTurtleProduct() {

        await this.removeBtn.click();

        await expect(this.page.getByText('Turtles Ninja T-shirt')).toBeVisible();

        await this.page.locator('.sc-124al1g-2.edLCDn > .sc-124al1g-0').click();

        await expect(this.page.getByText('Turtles Ninja T-shirt').nth(1)).toBeVisible();

        
        await expect(this.page.getByText('X | Cowabunga! Quantity:')).toBeVisible();
        await expect(this.page.getByText('$ 10.90').nth(3)).toBeVisible();
        await expect(this.page.getByText('$ 43.60')).toBeVisible();
    }

    async addGreyTshirt() {

        await this.removeBtn.click();

        await expect(this.page.getByText('Grey T-shirt')).toBeVisible();

        await this.addToCartBtn.nth(8).click();

        await expect(this.page.getByText('Grey T-shirt').nth(1)).toBeVisible();

        
         await expect(this.page.getByText('X | You will like this one')).toBeVisible();
         await expect(this.page.getByText('$ 14.90')).toBeVisible();
         await expect(this.page.getByText('$ 58.50')).toBeVisible();

        
    }

    async addBlackTshirt() {

        await this.removeBtn.click();

        await expect(this.page.getByText('Black T-shirt with white')).toBeVisible();

        await this.page.locator('.sc-124al1g-2.jngQVM > .sc-124al1g-0').click();

        await expect(this.page.getByText('Black T-shirt with white').nth(1)).toBeVisible();

        
        await expect(this.page.getByText('X | Adidas originals Quantity:')).toBeVisible();
        await expect(this.page.getByText('$ 14.90').nth(1)).toBeVisible();
        await expect(this.page.getByText('$ 73.40')).toBeVisible();
    }

}
