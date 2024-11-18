import { Scroll } from "../abstract-products/scroll";

/**
 * A concrete implementation of the Scroll class for the light theme.
 * This class overrides the render method to display a scroll styled according to the light theme.
 */
export class LightScroll extends Scroll {
  /**
   * Renders the light-themed scroll to the UI.
   * This method provides the specific rendering logic for a scroll that follows the light theme.
   * In this example, it logs a message indicating that the scroll is light-themed.
   */
  render() {
    console.log("Rendering a light-themed scroll!");
  }
}
