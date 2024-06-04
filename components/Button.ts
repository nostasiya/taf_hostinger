import BaseComponent from './BaseComponent.ts'

export default class Button extends BaseComponent {
  constructor(locator: string) {
    super(locator)
  }

  async click() {
    await (await this.getDisplayedElement()).click()
  }
}
