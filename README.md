

Q 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById — It selects one single element using the unique id name.

getElementsByClassName — It selects all elements which has the same class name and returns them as a collection.

querySelector — It selects the first element which matches a CSS selector.

querySelectorAll — It selects all elements which match a CSS selector and returns them as a list.


Q 2. How do you create and insert a new element into the DOM?

we create a new element using document.createElement(), then add content to it, and insert it into the DOM using appendChild() || append().


Q 3. What is Event Bubbling? And how does it work?

Event Bubbling is:  an event starts from the clicked element and then moves upward to its parent elements.

It works like this: when i click a button inside a div, the event first runs on the button, then the div, then the body, and continues up.


Q 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is when we add 1 event listener to a parent element instead of adding listeners to many child elements.

It is useful because, it improves performance and work for dynamically added elements.


Q 5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() — Stops the browser default action, like it's stopping a form from submitting.

stopPropagation() — Stops the event from moving up to the parent elements.

