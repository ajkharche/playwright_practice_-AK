export class psLoginPage {
  constructor(page) {
    this.page = page;
    this.txt_signin = page.getByRole('link',{name:'Sign in'});
    this.txt_registrationlink = page.getByRole('link',{name:'Register your account'});
    this.txt_username = page.getByLabel('Email address');
    this.txt_password = page.getByPlaceholder('Your password');
    this.click_login = page.locator('//input[@aria-label="Login"]');
  }

  async goto() {
    await this.page.goto('https://practicesoftwaretesting.com/');
  }

  async click_sign_in_link()
{
    await this.txt_signin.click();
}

async click_Register_link(){
     await this.txt_registrationlink.click();

}
  async user_enter_emailadd(ed) {
    await this.txt_username.fill(ed);
  }

  async user_enter_password(password) {
    await this.txt_password.fill(password);
  }

  async click_login_button() {
    await this.click_login.click();
  }
}
