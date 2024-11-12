/**
 * Strategy Interface for Payment Methods.
 *
 * This class defines the contract for all concrete payment strategies. Each concrete strategy
 * (such as `CreditCardPayment`, `GooglePayPayment`, or `PhonePePayment`) must extend this class
 * and implement the `processPayment` method to define how payment processing will occur.
 *
 * The `PaymentMethod` class serves as an interface, allowing the `PaymentContext` class to
 * interact with different payment methods interchangeably.
 *
 * @class PaymentMethod
 */
class PaymentMethod {
  /**
   * Processes the payment using the specific payment method.
   * This is an abstract method that must be implemented by all concrete payment strategies.
   *
   * The concrete classes, such as `CreditCardPayment` or `GooglePayPayment`, will provide
   * their own implementation of this method to handle payment processing.
   *
   * @method processPayment
   * @throws {Error} Throws an error if the method is not implemented in a subclass.
   * const paymentMethod = new PaymentMethod();
   * paymentMethod.processPayment(); // Throws error: "processPayment method must be implemented by subclass."
   */
  processPayment() {
    throw new Error("processPayment method must be implemented by subclass.");
  }
}
