const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement("p");
const footer = document.createElement("footer");

copyright.innerHTML = `\u00A9 Elias Sepulveda ${thisYear}`;

const body = document.body;

body.append(footer);
footer.appendChild(copyright);
copyright.style.textAlign = "center"; // center copyright

console.log(today);
console.log(thisYear);
console.log(copyright);
