export class HomePage {
  constructor(page) {
    this.page = page;

    this.txt_product1 = page.getByText('Sauce Labs Backpack');
    this.txt_product2 = page.getByText('Sauce Labs Bike Light');
  }

  async selectProduct1() {
    await this.txt_product1.click();
  }

  async selectProduct2() {
    await this.txt_product2.click();
  }
}