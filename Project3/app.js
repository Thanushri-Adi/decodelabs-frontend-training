/* ShareShed Functional Client-Side  */

'use strict';

const menuToggleBtn = document.querySelector('.js-menu-toggle');
const navMenuDrawer = document.querySelector('.js-nav-menu');
const pendingCountElement = document.querySelector('.js-pending-count');
const pendingCountBox = document.querySelector('.js-pending-count-box'); // Animation container handle
const bookingActionButtons = document.querySelectorAll('.js-book-btn');

let currentPendingBookings = 18;


/* Interactive Action 1: Mobile Hamburger Open Mechanics*/
if (menuToggleBtn && navMenuDrawer) {
  menuToggleBtn.addEventListener('click', function () {
    navMenuDrawer.classList.toggle('is-open');
    const isOpen = navMenuDrawer.classList.contains('is-open');
    menuToggleBtn.setAttribute('aria-expanded', isOpen);
  });
}

/**
 * Interactive Action 2: Real-time Tool Booking Queue Tracker with Dynamic Highlight Flashes
 * Input: Click event on individual tool card action buttons
 * Process: Increment tracking parameters inside local memory boundaries and process flash intervals
 * Output: Safe interface text updates paired with temporary is-highlighted class insertions
 */
bookingActionButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    // Prevents double actions if item is already reserved
    if (button.classList.contains('is-booked')) return;


    // --- The IPO Execution Sequence ---
    
    // 1. Process Step: Update the state tracker value inside local memory boundaries
    currentPendingBookings += 1;

    // 2. Output Step A: Update UI tracking counters using secure textContent boundaries
    if (pendingCountElement) {
      pendingCountElement.textContent = currentPendingBookings;
    }

    // 3. Output Step B: Modify target button states natively via structural classes
    button.classList.add('is-booked');
    button.textContent = 'Reserved ✓';

    // 4. Output Step C: Trigger Dynamic Visual Metric Highlight
    if (pendingCountBox) {
      // Apply the active state animation class hook
      pendingCountBox.classList.add('is-highlighted');

      // Asynchronous self-cleaning timer: strip the class hook when execution completes
      setTimeout(function () {
        pendingCountBox.classList.remove('is-highlighted');
      }, 300);
    }
  });
});