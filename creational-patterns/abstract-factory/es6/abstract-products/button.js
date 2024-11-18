/**
 * A base class representing a generic button component.
 * This class provides the basic structure for rendering a button.
 * Concrete button classes (e.g., `DarkButton`, `LightButton`) should extend this class and
 * customize it according to their specific styles or behavior.
 */
export class Button {
  /**
   * Renders the button to the UI.
   * This method is a placeholder that should be implemented by subclasses to define how
   * the button is rendered. For example, a `DarkButton` might render with dark colors,
   * while a `LightButton` might render with light colors.
   */
  render() {
    throw new Error("The render method must be implemented in a subclass.");
  }
}
