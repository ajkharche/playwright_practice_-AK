import { expect, Locator, Page } from '@playwright/test';

export class ShoppingPage {
readonly page: Page;
readonly productPrices: Locator;
readonly addToCartButtons: Locator;
readonly closeCartButton: Locator;
readonly cartItems: Locator;
readonly cartDrawer: Locator;
readonly openCartButton: Locator;

constructor(page: Page) {
this.page = page;
this.productPrices = page.locator('//p[small[text()="$"]]');
this.addToCartButtons = page.locator('//button[text()="Add to cart"]');
this.closeCartButton = page.locator('//span[text()="X"]');
this.cartItems = page.locator('//div[contains(@class,"sc-11uohgb-0")]');
this.cartDrawer = page.locator('div').filter({ hasText: 'SUBTOTAL' }).filter({ hasText: 'Cart' }).first();
this.openCartButton = page.locator('//div[@title="Products in cart quantity"]');

}

async navigateToURL(url: string) {
await this.page.goto(url);
}

async waitForProductsToLoad() {
await expect(this.productPrices.first()).toBeVisible();
}

async verifyProductsBetweenPriceRange(minPrice: number, maxPrice: number) {
const count = await this.productPrices.count();
const matchedProducts: number[] = [];
for (let i = 0; i < count; i++) {
const wholePrice = await this.productPrices.nth(i).locator('b').textContent();
const decimalPrice = await this.productPrices.nth(i).locator('span').textContent();
const productPrice = Number(`${wholePrice}${decimalPrice}`);
if (productPrice >= minPrice && productPrice <= maxPrice) {
 matchedProducts.push(productPrice);
console.log(`Matched Product Price: ${productPrice}`);
        }
    }

    // Verify at least one matching product exists
    expect(matchedProducts.length).toBeGreaterThan(0);
    // Verify every matched product is within the range
    for (const price of matchedProducts) {
        expect(price).toBeGreaterThanOrEqual(minPrice);
        expect(price).toBeLessThanOrEqual(maxPrice);
    }
console.log("Products within range:", matchedProducts);
}



async addProductsBetweenPriceRange(minPrice: number, maxPrice: number) {
const count = await this.productPrices.count();
console.log(`Total Products : ${count}`);
let addedProducts = 0;
for (let i = 0; i < count; i++) {
const wholePrice = await this.productPrices.nth(i).locator('b').textContent();
const decimalPrice = await this.productPrices.nth(i).locator('span').textContent();
const productPrice = Number(`${wholePrice}${decimalPrice}`);

console.log(`Product ${i + 1} Price = ${productPrice}`);
if (productPrice >= minPrice && productPrice <= maxPrice) {
console.log(`Adding Product : ${productPrice}`);
await this.addToCartButtons.nth(i).click();
addedProducts++;
await this.page.waitForTimeout(2000); 
await this.closeCartButton.click();
}

    }
console.log(`Products Added = ${addedProducts}`);
 return addedProducts;
 
 }   

 async getCartProducts() {
    const products: {
        name: string;
        price: string;
        quantity: number;
        subtotal: string;
    }[] = [];

    const cartItems = this.cartDrawer.locator("div.sc-11uohgb-0");
    const count = await cartItems.count();

    for (let i = 0; i < count; i++) {
        const item = cartItems.nth(i);
        const name = (await item.locator("p.sc-11uohgb-2").textContent())?.trim() ?? "";

        const details = await item.locator("p.sc-11uohgb-3").textContent();
        const quantity = Number(details?.match(/Quantity:\s*(\d+)/)?.[1] ?? 0);

        const priceText = await item.locator("div.sc-11uohgb-4 > p").textContent();
        const price = priceText?.replace("$", "").trim() ?? "0.00";
        const subtotal = (Number(price) * quantity).toFixed(2);

        products.push({
            name,
            price,
            quantity,
            subtotal
        });
    }

    return products;
}
async clickOnOpenCartButton() {
    await this.openCartButton.click();

}

async getCartSummary() {
    const cartText = ((await this.cartDrawer.textContent()) ?? "")
        .replace(/\s+/g, " ")
        .trim();

    const cartProducts = await this.getCartProducts();

    const totalQuantity = cartProducts.reduce(
        (total, product) => total + product.quantity,
        0
    );

    const subtotalMatch = cartText.match(/SUBTOTAL[^0-9]*([0-9]+\.[0-9]{2})/);

    const grandTotal = subtotalMatch?.[1] ?? "0.00";

    return {
        totalQuantity,
        grandTotal
    };
}

}
  