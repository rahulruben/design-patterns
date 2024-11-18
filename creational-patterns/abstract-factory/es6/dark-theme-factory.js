import { ThemeFactory } from "./theme-factory";

export class DarkThemeFactory extends ThemeFactory {
  createButton() {
    return new DarkButton();
  }

  createScroll() {
    return new DarkScroll();
  }
}
