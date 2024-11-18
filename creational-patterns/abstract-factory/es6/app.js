import { DarkThemeFactory } from "./dark-theme-factory";
import { LightThemeFactory } from "./light-theme-factory";

function createUserInterface(themeFactory) {
  const button = themeFactory.createButton();
  const scroll = themeFactory.createScroll();

  button.render();
  scroll.render();
}

const darkThemeFactory = new DarkThemeFactory();
createUserInterface(darkThemeFactory);

const lightThemeFactory = new LightThemeFactory();
createUserInterface(lightThemeFactory)