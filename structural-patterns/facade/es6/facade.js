import { Menu } from "./menu";

/**
 * Class representing a facade for placing a restaurant order.
 * This class simplifies the process of placing an order by handling
 * the order placement, payment, and delivery in one method.
 */
export class Facade {
  /**
   * Creates an instance of the Facade class.
   * @param {Order} order - An object that handles order placement.
   * @param {Payment} payment - An object that handles payment processing.
   * @param {Delivery} delivery - An object that handles order delivery.
   */
  constructor(order, payment, delivery) {
    this.order = order;
    this.payment = payment;
    this.delivery = delivery;
    this.menu = new Menu();
  }

  /**
   * Places an order, processes the payment, and arranges delivery for the dish.
   * @param {string} dish - The name of the dish to order.
   * @param {number} amount - The amount to be paid for the dish.
   * @returns {void}
   * @example
   * const facade = new Facade(orderService, paymentService, deliveryService);
   * facade.placeRestaurantOrder("Pizza", 20); // Places order, makes payment, and delivers pizza
   */
  placeRestaurantOrder(dish, amount) {
    // Assuming getAvailableDishes is a method available in the scope
    const availableDishes = getAvailableDishes(); // Get available dishes

    if (availableDishes.includes(dish)) {
      this.order.placeOrder(dish); // Place the order
      this.payment.makePayment(amount); // Make the payment
      this.delivery.deliverOrder(dish); // Deliver the order
    } else {
      console.log(`Sorry, ${dish} is not available on the menu.`);
    }
  }
}
