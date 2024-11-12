/**
 * Concrete Strategy for Google Pay Payment.
 * This class implements the `PaymentMethod` strategy and provides the specific behavior
 * for processing payments using Google Pay. It overrides the `processPayment` method
 * to handle the logic for processing Google Pay transactions.
 *
 * @class GooglePayPayment
 * @extends {PaymentMethod}
 */
export class GooglePayPayment extends PaymentMethod {
  /**
   * Processes the payment using Google Pay.
   * This method is responsible for handling the logic specific to processing a payment
   * through Google Pay, such as interacting with Google Pay's API (this is simulated
   * in the example with a console log).
   *
   * @method processPayment
   * @throws {Error} Throws an error if the payment processing fails (simulated here).
   * @example
   * const payment = new GooglePayPayment(2000);
   * payment.processPayment(); // Logs: "Processing a Google Pay payment of 2000..."
   */
  processPayment() {
    // Simulating Google Pay payment processing with a console log
    console.log(`Processing a Google Pay payment of ${this.amount}...`);
  }
}
