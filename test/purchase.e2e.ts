import CartPage from '../pages/CartPage.ts';
import HomePage from '../pages/HomePage.ts';

describe('Plan purchase', () => {
  it('Should simulate {Business} plan purchase for {24 months} with {Google Pay} with filling all optional checkout fields as {Physical person}', async () => {
    await HomePage.choosePlan('business');
    await CartPage.choosePeriod('business', '24 MONTHS');
    await CartPage.createAccount();
    await CartPage.choosePaymentType('googlePay');
    await CartPage.fillCheckoutForm();
    await CartPage.submitPayment();
    await CartPage.payWithSelectedProvider('googlePay');
    // Ideally, we would verify that the payment was successful with the following check, e.g.:
    // await expect(successMessage).toContain('Payment successful');

    // However, due to the constraints of testing in a production environment, we cannot perform this check.
    // Performing an actual payment transaction could result in real charges and data processing.
    // Therefore, this verification step is commented out, and I would recommend to perform such tests in a staging or sandbox environment only.
  });
});
