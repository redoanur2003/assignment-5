1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

Ans for 1:
getElementById:Using the id dom selects only one element.Returns a single element object.
getElementsByClassName:Using the className dom selects all elements of the specific class.Returns an html collection.
querySelector:Using the querySelector dom selects the first matching element.Returns that an single element.
querySelectorAll:Using the querySelectorAll dom selects all matching elements.Returns a node list.

Ans for 2:
Create an element with document.createElement() and set the element name we want to create.like "div",'p','section',etc.
Then insert it at Parent node with using appendChild().

Ans for 3:
Event Bubbling means when an event get the target node.It first runs the handler on that element, then moves up to its parent to parent, up to the document.

Ans for 4:
Event Delegation means attaching a single event listener on a parent element to handle events for its children, instead of adding listeners to each child individually.It uses event bubbling.

Ans for 5:
event.stopPropagation():Stops the event from bubbling up to parent elements but if there there are multiple event on same section it will run.
event.preventDefault(): Stops the default action of an element.