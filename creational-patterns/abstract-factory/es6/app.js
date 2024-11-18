// Importing theme factories for dark and light themes
import { DarkThemeFactory } from "./concrete-factories/dark-theme-factory";
import { LightThemeFactory } from "./concrete-factories/light-theme-factory";

/**
 * Creates and renders a user interface based on the provided theme factory.
 * The factory is responsible for creating theme-specific components like buttons and scrolls.
 *
 * @param {Object} themeFactory - The factory object that creates theme-specific components (e.g., button, scroll).
 */
function createUserInterface(themeFactory) {
  // Create button and scroll elements using the theme factory
  const button = themeFactory.createButton();
  const scroll = themeFactory.createScroll();

  // Render the button and scroll elements
  button.render();
  scroll.render();
}

// Create an instance of DarkThemeFactory and pass it to createUserInterface
const darkThemeFactory = new DarkThemeFactory();
createUserInterface(darkThemeFactory);

// Create an instance of LightThemeFactory and pass it to createUserInterface
const lightThemeFactory = new LightThemeFactory();
createUserInterface(lightThemeFactory);
