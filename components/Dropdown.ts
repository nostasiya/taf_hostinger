import BaseComponent from './BaseComponent.ts';

export default class Dropdown extends BaseComponent {
  constructor(locator: string) {
    super(locator);
  }

  async selectOption(country: string) {
    // Open the dropdown options list
    await (await this.getDisplayedElement()).click();

    const options = await $$('.h-select__select .h-select__option');
    for await (const option of options) {
      if ((await option.getText()) == country) {
        await option.click();
        await expect(option).not.toBeDisplayed();
        await expect(await $('#country-select input[type="text"]')).toHaveValue(
          country
        );
        break;
      }
    }
  }
}
