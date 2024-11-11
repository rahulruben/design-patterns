/**
 * Creates a payment context that will execute the given payment strategy.
 *
 * @param {function} paymentStrategy - The payment strategy function that processes the payment.
 * @returns {function} A function that accepts an `amount` and delegates to the provided `paymentStrategy`.
 */
function paymentContext(paymentStrategy) {
  return (amount) => {
    paymentStrategy(amount);
  };
}
