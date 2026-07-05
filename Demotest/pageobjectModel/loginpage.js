export class LoginPage {
  constructor(page) {
    this.page = page;

    this.txt_username = page.getByPlaceholder('Username');
    this.txt_password = page.getByPlaceholder('Password');
    this.btn_login = page.locator('#login-button');
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async user_enter_username(username) {
    await this.txt_username.fill(username);
  }

  async user_enter_password(password) {
    await this.txt_password.fill(password);
  }

  async click_login() {
    await this.btn_login.click();
  }
}