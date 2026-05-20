/*  In your index.js file, using DOM manipulation, add a 'footer' child element to your index.html. Be careful on this step, as different DOM methods (append, appendChild, lastChild, etc.) have different placements.
Remember that you can store the elements in variables to reference the variables and call methods on them to more easily follow your code. (It's easier to read body.innerHTML than it is to read document.getElementsByTagName("body").innerHTML) */

const footer = document.createElement("footer");
// footer.innerText = "This is a footer.";

const body = document.body;

body.append(footer);

console.log(footer, body);
