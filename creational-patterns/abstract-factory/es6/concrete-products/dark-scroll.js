import { Scroll } from "../abstract-products/scroll";

/**
 * A concrete implementation of the Scroll class for the dark theme.
 * This class overrides the render method to display a scroll styled according to the dark theme.
 */
export class DarkScroll extends Scroll {
  /**
   * Renders the dark-themed scroll to the UI.
   * This method provides the specific rendering logic for a scroll that follows the dark theme.
   * In this example, it logs a message indicating that the scroll is dark-themed.
   */
  render() {
    console.log("Rendering a dark-themed scroll!");
  }
}
