import { getAvailableDishes } from "./menu.js";
import { placeOrder } from "./order.js";
import { makePayment } from "./payment.js";
import { deliverOrder } from "./delivery.js";

/**
 * Facade function that simplifies the process of placing an order.
 * This function coordinates the entire ordering process including
 * checking the menu, placing the order, processing payment, and delivering the order.
 *
 * @param {string} dish - The name of the dish to order.
 * @param {number} amount - The amount of money to be paid for the dish.
 */
export function placeRestaurantOrder(dish, amount) {
  const availableDishes = getAvailableDishes(); // Get available dishes

  if (availableDishes.includes(dish)) {
    placeOrder(dish); // Place the order
    makePayment(amount); // Make the payment
    deliverOrder(dish); // Deliver the order
  } else {
    console.log(`Sorry, ${dish} is not available on the menu.`);
  }
}
