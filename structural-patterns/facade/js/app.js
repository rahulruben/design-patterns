import { placeRestaurantOrder } from "./facade.js";

/**
 * Client code that demonstrates the use of the facade to place an order.
 * It calls the `placeRestaurantOrder` facade to handle the entire ordering process.
 */

// Client places an order for a Pizza and pays $20
placeRestaurantOrder("Pizza", 20);

// Client tries to order an unavailable dish (e.g., Sushi)
placeRestaurantOrder("Sushi", 25);
