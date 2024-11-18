/**
 * Abstract base class for a theme factory.
 * Concrete theme factories (e.g., DarkThemeFactory, LightThemeFactory) should extend this class
 * and implement the methods for creating theme-specific components like buttons and scrolls.
 */
export class ThemeFactory {
  /**
   * Creates a button component for the theme.
   * This method must be implemented by subclasses to return a button that matches the theme's design.
   *
   * @returns {Button} A button component for the theme.
   */
  createButton() {
    throw new Error("createButton method must be implemented in subclass");
  }

  /**
   * Creates a scroll component for the theme.
   * This method must be implemented by subclasses to return a scroll that matches the theme's design.
   *
   * @returns {Scroll} A scroll component for the theme.
   */
  createScroll() {
    throw new Error("createScroll method must be implemented in subclass");
  }
}
