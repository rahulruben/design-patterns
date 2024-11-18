import { ThemeFactory } from "../abstract-factory/theme-factory";

export class DarkThemeFactory extends ThemeFactory {
  createButton() {
    return new DarkButton();
  }

  createScroll() {
    return new DarkScroll();
  }
}
