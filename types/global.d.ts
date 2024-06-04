export declare global {
  type tPlan = 'premium' | 'business' | 'cloud';
  type tPaymentMethods =
    | 'creditCard'
    | 'payPal'
    | 'googlePay'
    | 'aliPay'
    | 'coingate';
  type tCheckoutFormInputs =
    | 'firstName'
    | 'lastName'
    | 'phoneNumber'
    | 'region'
    | 'city'
    | 'street'
    | 'zipCode';
}
