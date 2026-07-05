export class LogoutPage {
  constructor(page) {
    this.page = page;

    this.txt_Open_Menu = page.getByRole('button',{name:'Open Menu'});
    this.txt_logoutlink = page.getByRole('link',{name:'Logout'});
    this.txt_username = page.getByText('Accepted usernames are:');
    this.txt_password = page.getByText('Password for all users:');
    
  }

   async click_Open_Menu() {
    await this.txt_Open_Menu.click();
  }

   async click_logout_link() {
    await this.txt_logoutlink.click();

  }
  async Verify_user_name(){
    await this.txt_username;
  }

  async Verify_password(){
    await this.txt_password;
  }

}
