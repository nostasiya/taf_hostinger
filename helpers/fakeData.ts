import { faker } from '@faker-js/faker'

export default class FakeData {
  static email = faker.internet.email()
  static password = faker.internet.password()
  static firstName = faker.person.firstName()
  static lastName = faker.person.lastName()
  static phoneNumber = faker.phone.number()
  static region = faker.location.state()
  static city = faker.location.city()
  static street = faker.location.streetAddress()
  // Skipped zip code generation as it requires a country-based solution to pass zip code input validation
  // In future solution, response from https://cart.hostinger.com/api/v1/geolocation/countries/${countryCode}/states
  // can be used to provide a country-based solution
  // static zipCode = faker.location.zipCode()
}
