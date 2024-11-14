/**
 * Class representing a delivery service.
 * This class provides functionality to deliver an order to a customer's address.
 */
export class Delivery {
  /**
   * Delivers an order to the specified address.
   * @param {string} dish - The name of the dish to be delivered.
   * @returns {void} This method doesn't return a value.
   * @example
   * const delivery = new Delivery();
   * delivery.deliverOrder("Pizza"); // Logs: "Delivering Pizza to your address..."
   */
  deliverOrder(dish) {
    console.log(`Delivering ${dish} to your address...`);
  }
}
