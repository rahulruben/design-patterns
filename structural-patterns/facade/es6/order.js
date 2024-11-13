/**
 * Represents an order for a dish.
 */
export class Order {
  /**
   * Creates an instance of an Order.
   * @param {string} dish - The name of the dish being ordered.
   */
  constructor(dish) {
    /** @type {string} */
    this.dish = dish;
  }

  /**
   * Places an order for a specific dish.
   * @param {string} dish - The name of the dish to order.
   * @returns {void} This method does not return a value.
   */
  placeOrder(dish) {
    console.log(`Order placed for: ${dish}`);
  }
}
