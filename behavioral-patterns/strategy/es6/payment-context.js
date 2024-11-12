/**
 * Context class that interacts with the current payment strategy.
 *
 * The `PaymentContext` class maintains a reference to the current payment method (strategy)
 * and delegates the responsibility of processing the payment to that strategy.
 * The context allows the payment method to be changed dynamically at runtime, promoting flexibility
 * and the open/closed principle of software design.
 *
 * @class PaymentContext
 */
export class PaymentContext {
  /**
   * Creates an instance of PaymentContext with a specified payment method.
   * The context is initialized with a strategy (payment method), which will be used for processing payments.
   *
   * @param {PaymentMethod} paymentMethod - The payment method (strategy) to be used initially.
   * @constructor
   * @example
   * const paymentContextInstance = new PaymentContext(new CreditCardPayment(2000));
   */
  constructor(paymentMethod) {
    this.paymentMethod = paymentMethod; // Set the initial payment method
  }

  /**
   * Dynamically sets a new payment method (strategy).
   * This method allows the strategy to be switched at runtime, allowing flexibility
   * in choosing how payments are processed (e.g., switching from CreditCardPayment to GooglePayPayment).
   *
   * @param {PaymentMethod} paymentMethod - The new payment method (strategy) to be set.
   * @method setPaymentMethod
   * @example
   * paymentContextInstance.setPaymentMethod(new GooglePayPayment(2000));
   */
  setPaymentMethod(paymentMethod) {
    this.paymentMethod = paymentMethod; // Set the new payment method
  }

  /**
   * Executes the payment using the current payment strategy.
   * This method delegates the responsibility of processing the payment to the strategy
   * currently assigned to the context (i.e., the `paymentMethod` property).
   *
   * @method processPayment
   * @throws {Error} If the `processPayment` method is not implemented in the current strategy.
   * @example
   * paymentContextInstance.processPayment(); // Logs: "Processing a credit card payment of 2000..."
   */
  processPayment() {
    this.paymentMethod.processPayment(); // Delegate the payment processing to the current strategy
  }
}
