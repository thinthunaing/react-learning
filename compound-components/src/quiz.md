# Compound Components Quiz

1. How would you explain the concept of compound components in React to someone who
   only knows the very basics of React?

Components that work together to accomplish a greater objective than might make
sense to try and accomplish with a single component alone.


2. What are some examples of HTML elements that work together to add functionality
   or styling to each other?

<ul> & <li>, <select> & <option>, <table> & all the other table elements


3. How can compound components help you avoid having to drill props multiple levels
   down?
   
Compound component "flatten" the heirarchy that I would otherwise need to pass
props through. Since I need to provide the children to render, the parent-most
component has direct access to those "grandchild" components, to which it can
pass whatever props it needs to pass directly.