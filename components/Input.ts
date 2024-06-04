import BaseComponent from './BaseComponent.ts';

export default class Input extends BaseComponent {
  constructor(locator: string) {
    super(locator);
  }

  /**
   * Re-written click method for Inputs, as they may have opacity eql to 0
   */
  async click() {
    await (await $(this.locator)).click();
  }

  async setValue(value: string) {
    await (await this.getDisplayedElement()).setValue(value);
  }
}
