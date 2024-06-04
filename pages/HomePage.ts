import BasePage from './BasePage.ts'
import { Button } from '../components/index.ts'
import constants from '../constants/constants.ts'

export default new (class HomePage extends BasePage {
  private premium: Button
  private business: Button
  private cloud: Button

  constructor() {
    super()
    this.premium = new Button(
      `[data-click-id='hgr-homepage-pricing_table-add_to_cart-hosting_hostinger_premium']`
    )
    this.business = new Button(
      `[data-click-id='hgr-homepage-pricing_table-add_to_cart-hosting_hostinger_business']`
    )
    this.cloud = new Button(
      `[data-click-id='hgr-homepage-pricing_table-add_to_cart-hosting_cloud_economy']`
    )
  }

  public async choosePlan(planType: tPlan) {
    await this[planType].click()
    await expect(browser).toHaveUrl(
      expect.stringContaining('https://cart.hostinger.com/')
    )
    const title = await this.title.getDisplayedElement()
    await expect(title.nextElement()).toHaveText(
      `Selected plan: ${constants.plans[planType]}`
    )
  }
})()
