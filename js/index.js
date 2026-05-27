const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement("p");
const body = document.body;

body.append(document.createElement("footer"));

const skills = [
  "HTML/CSS/JavaScript",
  "VS Code",
  "Git and GitHub",
  "Codecademy: p5.js course - completed",
  "Code the dream - Intro to Programming - in progress",
  "Building Controller Programming",
  "Building Automation",
  "Program Sequence Verification",
  "Control System Design and Engineering",
  "I.T Support",
  "Computer Networking",
  "Electrical Control Systems",
  "Instrumentation",
  "Electrical Troubleshooting",
  "Electrical Theory",
];

const skillsSection = document.querySelector("#skills");
const skillsList = skillsSection.querySelector("ul");

copyright.innerHTML = `\u00A9 Elias Sepulveda ${thisYear}`;

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}
const footer = document.querySelector("footer");

footer.appendChild(copyright);
copyright.style.textAlign = "center"; // center copyright

console.log(today);
console.log(thisYear);
console.log(copyright.textContent);
console.log(skillsSection);
console.log(skillsList);

const messageForm = document.querySelector("form[name='leave_message']");
messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;
  console.log(usersName);
  console.log(usersEmail);
  console.log(usersMessage);
  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");
  newMessage.innerHTML = "<a href=mailto: ddelsid08@gmail.com>Hello</a><span>" + usersMessage + "</span>";
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.setAttribute("type", "button");
  removeButton.addEventListener("click", (event) => {
    const entry = event.target.parentNode;
    entry.remove();
  });
  newMessage.append(removeButton);
  messageList.append(newMessage);
  // body.append(newMessage);
  console.log("innerHTML", newMessage.innerHTML);
  console.log(newMessage);
  event.target.reset();
});

/*  Display Messages in List

  + In the index.js file, start inside the event listener callback function on the line above where you reset the form
  + Create a variable named messageSection and use "DOM Selection" to select the #messages section by id
  + Create a variable named messageList and use "DOM Selection" to query the messageSection (instead of the entire document) to find the <ul> element
  + Create a variable named newMessage that makes a new list item (li) element
  + On the next line, set the inner HTML of your newMessage element with the following information:
    + <a> element that displays the "usersName" and is a clickable link to the "usersEmail" (hint: use the mailto: prefix)
    + <span> element that displays the "usersMessage"
  + Create a variable named removeButton that makes a new <button> element
    + Set the inner text to "remove"
    + Set the type attribute to "button"
    + Add an event listener to the removeButton element that handles the "click" event
      + Inside the callback function, create a variable named entry that finds the button's parent element using DOM Traversal (hint: parentNode property)
      + Remove the entry element from the DOM (hint: remove method)
  + Append the removeButton to the newMessage element
    + hint: appendChild method
  + Append the newMessage to the messageList element
  + Save and refresh your browser (or just check your browser for changes if using live extension)
 
 */
