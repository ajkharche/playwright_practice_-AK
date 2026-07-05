import { page,expect } from '@playwright/test';

export class psHomePage {
  constructor(page) {
    this.page = page;
    this.homepage = page.getByRole('link',{name :'Home'});
    this.searchproduct = page.getByPlaceholder('Search');
    this.searchbutton = page.getByRole('button',{name:'Search '});
    this.productsearchresult = page.locator('//span[text()="D"]');   
    this.addtocart = page.getByRole('button',{name:'Add to cart '});
    this.productsheetsnader = page.getByText(' Sheet Sander ');
    this.productprotectiveclove =page.getByText(' Protective Gloves ');
    this.cartlink =page.getByRole('link',{name:'cart'});
    this.addtocart1 = page.locator('button:has-text("Add to cart")');
    this.productProtective_Gloves = page.locator('//h5[@data-test="product-name"]');
  }
    async product_search_Thor_Hammer(product)
{
    await this.searchproduct.fill(product);
}

 async click_search_button()
{
    await this.searchbutton.click();
}

 async click_product()
{
    await this.productsearchresult.click();
}

 async click_addtocart_button()
{
    await this.addtocart.click();
}

 async click_home_link()
{
    await this.homepage.click();
}

 async product_search_Sheet_Sander(product)
{
    await this.searchproduct.fill(product);
}

 async product_search_Protective_Gloves(product)
{
    await this.searchproduct.fill(product);
}

 async click_ONCart()
{
    await this.cartlink.click();
}

 async click_Sheet_Sander()
{
    await this.productSheet_Sander.click();
}

 async click_Protective_Gloves()
{
    await this.productProtective_Gloves.click();
}

 async click_addtocart1()
{
    await this.addtocart1.click();
}








}

