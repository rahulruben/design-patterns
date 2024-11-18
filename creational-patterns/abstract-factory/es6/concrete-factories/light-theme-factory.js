import { ThemeFactory } from "../abstract-factory/theme-factory";

export class LightThemeFactory extends ThemeFactory {
  createButton() {
    return new LighButton();
  }

  createScroll() {
    return new LightScroll();
  }
}
