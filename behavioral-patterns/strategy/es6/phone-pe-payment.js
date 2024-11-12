/**
 * Concrete Strategy for PhonePe Payment.
 *
 * This class implements the `PaymentMethod` strategy and provides the specific behavior
 * for processing payments via PhonePe.
 *
 * @class PhonePePayment
 * @extends {PaymentMethod}
 */
export class PhonePePayment extends PaymentMethod {
  /**
   * Processes the payment using PhonePe.
   * This method contains the logic for handling payments through the PhonePe platform.
   *
   * @method processPayment
   * @example
   * const payment = new PhonePePayment(2000);
   * payment.processPayment(); // Logs: "Processing a PhonePe payment of 2000..."
   */
  processPayment() {
    // Corrected to reflect PhonePe payment processing
    console.log(`Processing a PhonePe payment of ${this.amount}...`);
  }
}
