/**
 * Logger Singleton
 *
 * This function-based Singleton ensures that only one instance of the Logger object
 * is created and shared across the application. The instance provides logging
 * functionality with methods to log messages and retrieve the logged messages.
 *
 * @returns {Object} - The Singleton instance of the Logger.
 */
const Logger = (function () {
  // Private variable to hold the single instance of the Logger
  let instance = null;

  /**
   * Creates a new Logger instance.
   * This function is used only once when the Logger Singleton is first invoked.
   *
   * @returns {Object} - The Logger instance with `log` and `getLogs` methods.
   */
  function createInstance() {
    const logs = []; // Private array to hold log messages

    return {
      /**
       * Logs a message to the console and stores it in the internal logs array.
       *
       * @param {string} message - The message to log.
       */
      log: function (message) {
        logs.push(message);
        console.log(message);
      },

      /**
       * Retrieves all the logged messages.
       *
       * @returns {Array} - An array containing all log messages.
       */
      getLogs: function () {
        return logs;
      },
    };
  }

  // Return a function that checks if an instance exists and returns it.
  return function () {
    if (!instance) {
      instance = createInstance(); // Create the instance only once
    }
    return instance; // Always return the existing instance
  };
})();

/**
 * Usage example of the Logger Singleton:
 */

// First instance of Logger
const logger1 = Logger();
logger1.log("This is the first log message.");

// Second instance of Logger (should be the same as the first)
const logger2 = Logger();
logger2.log("This is the second log message.");

// Both logger1 and logger2 point to the same instance
console.log(logger1 === logger2); // true, both references point to the same instance

// Retrieve all logged messages from the Singleton instance
console.log(logger1.getLogs());
