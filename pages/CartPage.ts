import BasePage from './BasePage.ts'
import { Input, Button, Dropdown, TextComponent } from '../components/index.ts'
import FakeData from '../helpers/fakeData.ts'
import constants from '../constants/constants.ts'

export default new (class HomePage extends BasePage {
  email: Input
  password: Input
  checkoutFormField: (value: string) => Input
  checkoutFormCountryDropdown: Dropdown
  planName: TextComponent
  submitBtn: Button

  constructor() {
    super()
    this.email = new Input('div[class*="email"] input[type="text"]')
    this.password = new Input('input[type=password]')
    this.checkoutFormField = value =>
      new Input(`#${value}-input .h-input__input`)
    this.checkoutFormCountryDropdown = new Dropdown('#country-select')
    this.planName = new TextComponent('.plan-info__plan-name')
    this.submitBtn = new Button('#hcart-submit-payment')
  }

  public async choosePeriod(name: tPlan, period: string) {
    await this.waitTillPageTitleLoad()
    const allPeriods = await $$('.cart-period__period')

    for await (const el of allPeriods) {
      if ((await el.getText()) == period) {
        const periodRadioBtn = await el.previousElement()
        await periodRadioBtn.click()
        await expect(await periodRadioBtn.$('.radio--active')).toExist()
        break
      }
    }
    await expect(await this.planName.getDisplayedElement()).toHaveText(
      this.resolvePlanName(name, period),
      { ignoreCase: true }
    )
  }

  public async createAccount() {
    await this.email.setValue(FakeData.email)
    await this.password.setValue(FakeData.password)
  }

  public async choosePaymentType(option: tPaymentMethods) {
    await this.resolvePaymentMethod(option).click()
  }

  public async submitPayment() {
    await this.submitBtn.click()
  }

  public async fillCheckoutForm() {
    await this.resolveFormInput('firstName').setValue(FakeData.firstName)
    await this.resolveFormInput('lastName').setValue(FakeData.lastName)
    await this.resolveFormInput('phoneNumber').setValue(FakeData.phoneNumber)
    // Currently select option from dropdown - hardcoded, in future using faker array method
    // or any other method to select random option should be implemented.
    await this.checkoutFormCountryDropdown.selectOption('Greece')
    await this.resolveFormInput('region').setValue(FakeData.region)
    await this.resolveFormInput('city').setValue(FakeData.city)
    await this.resolveFormInput('street').setValue(FakeData.street)
    // Check comments in FakeData class
    // await this.checkoutFormField('zipCode').setValue(FakeData.zipCode)
  }

  /**
   * Should be used in future with mock/sandbox cards or paymnet processors.
   *
   * Requires modification of each provider paymnet flow.
   *
   * @param option - One of the payment providers
   */
  public async payWithSelectedProvider(option: tPaymentMethods) {
    switch (option) {
      case 'creditCard':
        // TBD: this should be implemented in the future tests creation process
        break
      case 'payPal':
        // TBD: this should be implemented in the future tests creation process
        break
      case 'googlePay':
        await this.resolvePaymentProvider('googlePay').click()
        break
      case 'aliPay':
        // TBD: this should be implemented in the future tests creation process
        break
      case 'coingate':
        // TBD: this should be implemented in the future tests creation process
        break
    }
  }

  private resolvePaymentProvider(option: tPaymentMethods): Button {
    const paymentProvider = {
      creditCard: 'processout',
      payPal: 'braintree_paypal',
      googlePay: 'button#gpay-button-online-api-id',
      aliPay: 'payssion.alipay_cn',
      coingate: 'coingate',
    }

    return new Button(`${paymentProvider[option]}`)
  }

  private resolvePaymentMethod(option: tPaymentMethods): Input {
    const paymentOptions = {
      creditCard: 'processout',
      payPal: 'braintree_paypal',
      googlePay: 'checkout.googlepay',
      aliPay: 'payssion.alipay_cn',
      coingate: 'coingate',
    }

    return new Input(`input[value='${paymentOptions[option]}']`)
  }

  private resolvePlanName(planType: tPlan, period: string): string {
    return `${constants.plans[planType]} - ${period} Plan`
  }

  private resolveFormInput(fieldName: tCheckoutFormInputs): Input {
    const inputNames = {
      firstName: 'first-name',
      lastName: 'last-name',
      phoneNumber: 'phone-number',
      region: 'state',
      city: 'city',
      street: 'address',
      zipCode: 'zip',
    }

    return new Input(`#${inputNames[fieldName]}-input .h-input__input`)
  }
})()
