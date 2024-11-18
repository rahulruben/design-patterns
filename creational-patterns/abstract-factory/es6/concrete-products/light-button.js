import { Button } from "../abstract-products/button";

/**
 * A concrete implementation of the Button class for the light theme.
 * This class overrides the render method to display a button styled according to the light theme.
 */
export class LightButton extends Button {
  /**
   * Renders the light-themed button to the UI.
   * This method provides the specific rendering logic for a button that follows the light theme.
   * In this example, it logs a message indicating that the button is light-themed.
   */
  render() {
    console.log("Rendering a light-themed button!");
  }
}
