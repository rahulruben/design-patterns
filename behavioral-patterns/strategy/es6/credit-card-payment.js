/**
 * Concrete Strategy for Credit Card Payment.
 * This class implements the `PaymentMethod` strategy and provides the specific behavior
 * for processing payments using a credit card. It overrides the `processPayment` method
 * to handle the logic for processing credit card transactions.
 *
 * @class CreditCardPayment
 * @extends {PaymentMethod}
 */
export class CreditCardPayment extends PaymentMethod {
  /**
   * Processes the payment using a credit card.
   * This method is responsible for handling the logic specific to processing a payment
   * through a credit card, such as communicating with a payment gateway (this is simulated
   * in the example with a console log).
   *
   * @method processPayment
   * @throws {Error} Throws an error if the payment processing fails (simulated here).
   * @example
   * const payment = new CreditCardPayment(2000);
   * payment.processPayment(); // Logs: "Processing a credit card payment of 2000..."
   */
  processPayment() {
    // Simulating payment processing with a console log
    console.log(`Processing a credit card payment of ${this.amount}...`);
  }
}
