import { expect } from '@playwright/test';
export class psRegistrationPage {
  constructor(page) {
    this.page = page;
    this.verify_registrationpagetxt = page.getByText('Customer registration');
    this.firstname = page.getByLabel('First name');
    this.lastname = page.getByLabel('Last name');
    this.dateofbirth = page.getByLabel('Date of Birth');
    this.txt_country = page.getByLabel('Country');
    this.postalcode = page.getByLabel('Postal code');
    this.housenumber = page.getByLabel('House number');
    this.txt_street = page.getByLabel('Street');
    this.txt_city = page.getByLabel('City');
    this.txt_state = page.getByLabel('State');

    this.txt_phone = page.getByLabel('Phone');
    this.txt_emailaddress = page.getByLabel('Email address'),
    this.txt_password = page.getByLabel('Password'),

    this.btn_register = page.getByRole('button',{name:'Register '});
  }

 

  async verify_Text_Customer_registration() {
  await expect(this.verify_registrationpagetxt).toBeVisible();
}

  async user_enter_firstname(fn) {
    await this.firstname.fill(fn);
  }

   async user_enter_lastname(ln) {
    await this.lastname.fill(ln);
  }

   async user_enter_dateofbirth(dob) {
    await this.dateofbirth.fill(dob);
  }

  async user_enter_country(country) {
  await this.txt_country.selectOption(country);
}

   async user_enter_postalcode(pc) {
    await this.postalcode.fill(pc);
  }

   async user_enter_housenumber(hn) {
    await this.housenumber.fill(hn);
  }

   async user_enter_street(Street) {
    await this.txt_street.fill(Street);
  }

   async user_enter_city(city) {
    await this.txt_city.fill(city);
  }

   async user_enter_state(state) {
    await this.txt_state.fill(state);
  }

   async user_enter_phonenumber(pn) {
    await this.txt_phone.fill(pn);
  }

   async user_enter_emailaddress(ed) {
    await this.txt_emailaddress.fill(ed);
  }


  async user_enter_password(password) {
    await this.txt_password.fill(password);
  }

  async click_register() {
    await this.btn_register.click();
  }
}

