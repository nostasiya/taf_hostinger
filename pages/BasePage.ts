import constants from '../constants/constants.ts'
import { Button, TextComponent } from '../components/index.ts'

export default class BasePage {
  private cookieAccept: Button
  private cookieDecline: Button
  protected title: TextComponent

  constructor() {
    this.cookieAccept = new Button(
      '[data-click-id="hgr-cookie_consent-accept_all_btn"]'
    )
    this.cookieDecline = new Button(
      '[data-click-id="hgr-cookie_consent-decline_btn"]'
    )
    this.title = new TextComponent("//div[contains(@class, 'heading')]")
  }

  public async handleCookies(consent = 'Decline') {
    try {
      await browser.waitUntil(
        async () => {
          if (
            (await this.cookieDecline.isDisplayed()) ||
            (await this.cookieAccept.isDisplayed())
          ) {
            if (
              (await this.cookieDecline.getAttribute('loading')) == 'false' ||
              (await this.cookieAccept.getAttribute('loading')) == 'false'
            ) {
              if (consent === 'Decline') {
                await this.cookieDecline.click()
              }
              if (consent === 'Accept') {
                await this.cookieAccept.click()
              }
              return true
            }
          }
        },
        {
          timeout: constants.wait._15,
          interval: 250,
        }
      )
    } catch (e) {}
  }

  protected async waitTillPageTitleLoad() {
    await this.title.getDisplayedElement()
  }
}
