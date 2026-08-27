// Test feedback controller: correct answers advance briefly; wrong answers stay until Continue.
// Loaded after tests-bank.js. It wraps the existing session renderer without changing the question bank.
(function () {
  const originalSetTimeout = window.setTimeout;
  const WAIT_CORRECT = 900;

  window.setTimeout = function (handler, delay, ...args) {
    // The current test engine uses a short timeout only to advance after an answer.
    // Keep short delays elsewhere untouched; extend this specific quiz delay.
    if (typeof handler === 'function' && delay === 450) {
      return originalSetTimeout(handler, WAIT_CORRECT, ...args);
    }
    return originalSetTimeout(handler, delay, ...args);
  };
})();
