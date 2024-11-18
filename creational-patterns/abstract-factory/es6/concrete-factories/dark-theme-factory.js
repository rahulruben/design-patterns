import { ThemeFactory } from "../abstract-factory/theme-factory";
import { DarkButton } from "./dark-button";
import { DarkScroll } from "./dark-scroll";
/**
 * Concrete factory class for creating dark theme UI components.
 * This class implements the methods from the abstract `ThemeFactory` class to create dark-themed components.
 */
export class DarkThemeFactory extends ThemeFactory {
  /**
   * Creates a dark-themed button.
   * This method overrides the `createButton` method from `ThemeFactory`
   * to return a DarkButton instance, which follows the dark theme style.
   *
   * @returns {DarkButton} A button component styled for the dark theme.
   */
  createButton() {
    return new DarkButton();
  }

  /**
   * Creates a dark-themed scroll component.
   * This method overrides the `createScroll` method from `ThemeFactory`
   * to return a DarkScroll instance, which follows the dark theme style.
   *
   * @returns {DarkScroll} A scroll component styled for the dark theme.
   */
  createScroll() {
    return new DarkScroll();
  }
}
