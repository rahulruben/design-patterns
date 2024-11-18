import { ThemeFactory } from "../abstract-factory/theme-factory";
import { LightButton } from "./light-button";
import { LightScroll } from "./light-scroll";

/**
 * Concrete implementation of ThemeFactory for creating light-themed UI components.
 * This factory produces light-themed buttons and scrolls.
 */
export class LightThemeFactory extends ThemeFactory {
  /**
   * Creates a light-themed button component.
   * This method returns a button that is styled according to the light theme.
   *
   * @returns {LightButton} A light-themed button component.
   */
  createButton() {
    return new LightButton();
  }

  /**
   * Creates a light-themed scroll component.
   * This method returns a scroll that is styled according to the light theme.
   *
   * @returns {LightScroll} A light-themed scroll component.
   */
  createScroll() {
    return new LightScroll();
  }
}
