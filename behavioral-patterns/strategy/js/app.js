/**
 * Main script to execute the payment process using different strategies.
 *
 * This script demonstrates how different payment methods (Credit Card, Google Pay, and PhonePe)
 * are used by dynamically changing the payment strategy.
 */

// Import the payment strategies and context function
import { paymentContext } from "./payment-context.js";
import { creditCardPayment } from "./payment-context.js";
import { googlePayPayment } from "./google-pay-payment.js";
import { phonePePayment } from "./phone-pe-payment.js";

// The amount to be paid in the transaction
const amountToBePaid = 2000;

// Example of using Credit Card payment strategy
let paymentMethod = paymentContext(creditCardPayment);
paymentMethod(amountToBePaid);

// Switch to Google Pay payment strategy
paymentMethod = paymentContext(googlePayPayment);
paymentMethod(amountToBePaid);

// Switch to PhonePe payment strategy
paymentMethod = paymentContext(phonePePayment);
paymentMethod(amountToBePaid);
