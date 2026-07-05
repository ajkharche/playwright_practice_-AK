export class AddCart {
  constructor(page) {
    this.page = page;

    this.txt_product = page.getByText('Sauce Labs Backpack');
    this.txt_addtocartbutton = page.getByRole('button',{name:'Add to cart'})
    this.txt_mycart = page.locator('//a[@data-test="shopping-cart-link"]'); 
    this.txt_removebutton_button =  page.getByRole('button',{name:'Remove'})
    this.txt_continue_shopping_button = page.getByRole('button',{name:'Continue Shopping'})
   this.checkout_button = page.getByRole('button',{name:'Checkout'})
   this.txt_firstname = page.getByPlaceholder('First Name');
   this.txt_lasttname = page.getByPlaceholder('Last Name');
   this.txt_pincode = page.getByPlaceholder('Zip/Postal Code');
   this.click_continue = page.getByRole('button',{name:'continue'});
   this.product_name = page.getByText('Sauce Labs Backpack');
   this.product_Payinfo = page.getByText('Payment Information:');
   this.product_sipinfo = page.getByText('Shipping Information:');
   this.product_pricetotal = page.getByText('Price Total');
   this.product_itemtotal = page.getByText('Item total: $29.99');
   this.product_total1 = page.getByText('Total: $32.39');
   this.finishbutton = page.getByRole('button',{name:'Finish'});
   this.product_text1 = page.getByText('Checkout: Complete!');
   this.product_text2 = page.getByText('Thank you for your order!');
   this.product_text3 = page.getByText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
   this.backtohomebutton = page.getByRole('button',{name:'Back Home'});






 }

   async getProduct() {
    return this.txt_product;
  }
  

  async addToCart() {
    await this.txt_addtocartbutton.click();
  }

  async mycartpersonal(){
    await this.txt_mycart.click();
  }

  async removebuttonverify() {
    return this.txt_removebutton_button;
}
  async Continueshoppingbutton_verify() {
    return this.txt_continue_shopping_button;


}
 async checkoutbutton_verify() {
    return this.checkout_button;
 }
 async checkoutbutton_click() {
    await this.checkout_button.click();
 }

 async enter_first_name(firstname) {
    await this.txt_firstname.fill(firstname);
 }

 async enter_last_name(lastname) {
    await this.txt_lasttname.fill(lastname);
 }

 async enter_pin_code(pincode) {
    await this.txt_pincode.fill(pincode);
 }

  async Click_countinue_button() {
    await this.click_continue.click();
 }

 async payment_info() {
    return this.product_Payinfo;
  }

  async ship_info() {
    return this.product_sipinfo;
  }

  async total_price() {
    return this.product_pricetotal
  }

  async item_total() {
    return this.product_itemtotal
  }

  async total() {
    return this.product_total1;
  }

  async click_finish_button() {
    await this.finishbutton.click();
  }

     async verify_text1() {
    return this.product_text1;
  }

   async verify_text2() {
    return this.product_text2;
  }

   async verify_text3() {
    return this.product_text3;
  }

  async verify_back_to_homebutton() {
    return this.backtohomebutton;
  }










}
