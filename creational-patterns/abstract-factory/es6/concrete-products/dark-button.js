import { Button } from "../abstract-products/button";

/**
 * A concrete implementation of the Button class for the dark theme.
 * This class overrides the render method to display a button styled according to the dark theme.
 */
export class DarkButton extends Button {
  /**
   * Renders the dark-themed button to the UI.
   * This method provides the specific rendering logic for a button that follows the dark theme.
   * In this example, it logs a message indicating that the button is dark-themed.
   */
  render() {
    console.log("Rendering a dark-themed button!");
  }
}
