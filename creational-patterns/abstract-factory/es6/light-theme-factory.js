import { ThemeFactory } from "./theme-factory";

export class LightThemeFactory extends ThemeFactory {
  createButton() {
    return new LighButton();
  }

  createScroll() {
    return new LightScroll();
  }
}
