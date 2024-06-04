import constants from '../constants/constants.ts';

export default class BaseComponent {
  protected locator: string;

  constructor(locator: string) {
    this.locator = locator;
  }

  public async getDisplayedElement() {
    const element = $(this.locator);
    await browser.waitUntil(
      async () => {
        if (await (await element).isDisplayed()) return true;
      },
      {
        timeout: constants.wait._15,
        interval: 250,
        timeoutMsg: `Element with locator [${this.locator}] is not displayed after ${constants.wait._15} ms`,
      }
    );

    return element;
  }
}
