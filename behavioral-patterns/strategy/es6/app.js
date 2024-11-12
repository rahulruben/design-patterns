/**
 * Imports the concrete payment strategies (GooglePayPayment, PhonePePayment) and the context (PaymentContext)
 * to demonstrate how the Strategy Pattern is used to dynamically switch between different payment methods.
 */
import { GooglePayPayment } from "./google-payment";
import { PaymentContext } from "./payment-context";
import { PhonePePayment } from "./phone-pe-payment";

/**
 * The amount to be paid in the transaction.
 * This value can be passed to different payment methods dynamically based on the selected payment strategy.
 * 
 * @constant {number}
 */
const amountToBePaid = 2000;

/**
 * Creates an instance of PaymentContext, initially configured with CreditCardPayment as the payment method.
 * The PaymentContext class allows for dynamic switching of payment strategies.
 * 
 * @example
 * paymentContextInstance.processPayment();
 */
const paymentContextInstance = new PaymentContext(
  new CreditCardPayment(amountToBePaid)
);

/**
 * Using the CreditCardPayment strategy to process the payment.
 * The processPayment() method delegates the responsibility to the current payment strategy (CreditCardPayment).
 * 
 * @method
 * @example
 * paymentContextInstance.processPayment(); // Outputs: "Processing a credit card payment of 2000..."
 */
paymentContextInstance.processPayment(); // Outputs: "Processing a credit card payment of 2000..."

/**
 * Switches the payment strategy to GooglePayPayment and processes the payment using that strategy.
 * The PaymentContext dynamically updates the payment method and delegates the payment processing.
 * 
 * @method
 * @example
 * paymentContextInstance.setPaymentMethod(new GooglePayPayment(amountToBePaid));
 * paymentContextInstance.processPayment(); // Outputs: "Processing a Google Pay payment of 2000..."
 */
paymentContextInstance.setPaymentMethod(new GooglePayPayment(amountToBePaid));
paymentContextInstance.processPayment(); // Outputs: "Processing a Google Pay payment of 2000..."

/**
 * Switches the payment strategy to PhonePePayment and processes the payment using that strategy.
 * The PaymentContext continues to dynamically delegate payment processing based on the selected strategy.
 * 
 * @method
 * @example
 * paymentContextInstance.setPaymentMethod(new PhonePePayment(amountToBePaid));
 * paymentContextInstance.processPayment(); // Outputs: "Processing a PhonePe payment of 2000..."
 */
paymentContextInstance.setPaymentMethod(new PhonePePayment(amountToBePaid));
paymentContextInstance.processPayment(); // Outputs: "Processing a PhonePe payment of 2000..."
