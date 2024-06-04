import BaseComponent from './BaseComponent.ts';

export default class TextComponent extends BaseComponent {
  constructor(locator: string) {
    super(locator);
  }

  async getText() {
    return (await this.getDisplayedElement()).getText();
  }
}
