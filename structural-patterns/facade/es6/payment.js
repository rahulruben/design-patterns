/**
 * Represents a payment transaction.
 */
export class Payment {
  /**
   * Creates an instance of a Payment.
   * @param {number} amount - The amount of money to be paid.
   */
  constructor(amount) {
    /** @type {number} */
    this.amount = amount;
  }

  /**
   * Processes the payment.
   * @param {number} amount - The amount to be paid.
   * @returns {void} This method does not return a value.
   */
  makePayment(amount) {
    console.log(`Payment of $${amount} made successfully.`);
  }
}
