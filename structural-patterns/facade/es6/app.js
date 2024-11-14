import { Delivery } from "./delivery";
import { Facade } from "./facade";
import { Order } from "./order";
import { Payment } from "./payment";

/**
 * Main application for placing restaurant orders.
 * This demonstrates the usage of the Facade design pattern to simplify the process.
 * @returns {void}
 */
const order = new Order();
const payment = new Payment(2000); // Assume the user has an initial balance of $2000
const delivery = new Delivery();

// Facade simplifies interactions with order, payment, and delivery services
const facade = new Facade(order, payment, delivery);

// Example of placing orders
facade.placeRestaurantOrder("Pizza", 20); // Places an order for Pizza, makes payment, and delivers it
facade.placeRestaurantOrder("Sushi", 25); // Places an order for Sushi, but assumes it's not available
