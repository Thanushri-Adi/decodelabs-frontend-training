# Project 3: Interactive Web Elements

##  Objective
Build the client-side nervous system of the platform by using vanilla JavaScript to bridge static layouts with real-time user state tracking.

##  Key Implementations
* **The IPO Lifecycle:** Implemented strict **Input-Process-Output (IPO)** execution loops via explicit DOM event listeners (`addEventListener`).
* **Decoupled Architecture:** Targeted elements by using functional `js-` class handles and modified active visual states with specialized `is-` prefixes (`is-booked`, `is-open`, `is-highlighted`).
* **Vulnerability Defense:** Engineered a secure, real-time booking queue tracker using strict `textContent` boundaries to eradicate cross-site scripting (XSS) code injections.
* **Asynchronous Micro-Animations:** Added an asynchronous, self-cleaning flash micro-animation using a native `setTimeout` execution window to highlight live metrics modifications.