import { page,expect } from '@playwright/test';

export class pscheckout {
  constructor(page) {
    this.page = page;
    this.process_checkout = page.getByRole('button',{name :'Proceed to checkout'});
    this.payment_method = page.locator('//select[@id="payment-method"]');
    this.house_number1 = page.getByLabel('House number');
    this.confirmbutton = page.getByRole('button',{name :' Confirm '});
    this.verifypm = page.getByText('Payment was successful');
    this.verifyproduct1 = page.locator('(//span[@data-test="product-title"])[1]')
    this.verifyproduct2 = page.locator('(//span[@data-test="product-title"])[3]')
    this.verifyproduct3 = page.locator('(//span[@data-test="product-title"])[2]');
    this.productsearchresult = page.locator('//span[text()="D"]');   
    this.addtocart = page.getByRole('button',{name:'Add to cart '});
    this.productsheetsnader = page.getByText(' Sheet Sander ');
    this.productprotectiveclove =page.getByText(' Protective Gloves ');
    this.cartlink =page.getByRole('link',{name:'cart'});
    this.addtocart1 = page.locator('button:has-text("Add to cart")');
    this.productProtective_Gloves = page.locator('//h5[@data-test="product-name"]');
  }

  async verify_thor_hammer() {
    await expect(this.verifyproduct1).toContainText('Thor Hammer');
}

 async verify_Sheet_Sander() {
    await expect(this.verifyproduct2).toContainText('Protective Gloves')
}

 async verifyProtectiveGlovesDisplayed() {
    await expect(this.verifyproduct3).toContainText('Protective Gloves');
}


    async click_checkout_button()
{
    await this.process_checkout.click();
}

    async select_payment_method(){
        await this.payment_method.selectOption('Cash on Delivery');
    }


    async enter_house_Number(HN){
        await this.house_number1.fill(HN)
    }

    async click_confirm_button()
{
    await this.confirmbutton.click();
}

async verify_payment_successful_message() {
    await expect(this.verifypm).toBeVisible();
}

   async verify_page_tittle_thor_hammer()
{
    await expect(this.page).toHaveTitle('Thor Hammer - Practice Software Testing - Toolshop - v5.0');
}

   async verify_page_tittle_Protective_Gloves()
{
    await expect(this.page).toHaveTitle('Protective Gloves - Practice Software Testing - Toolshop - v5.0');
}

   async verify_page_tittle_Sheet_Sander()
{
    await expect(this.page).toHaveTitle('Sheet Sander - Practice Software Testing - Toolshop - v5.0');
}

   async verify_cart_title()
{
    await expect(this.page).toHaveTitle('Checkout - Practice Software Testing - Toolshop - v5.0');
}
   async verify_cart_url()
{
    await expect(this.page).toHaveURL('https://practicesoftwaretesting.com/checkout');
}


}