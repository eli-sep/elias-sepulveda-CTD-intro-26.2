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
  event.target.reset();
});

/*  Handle Message Form Submit

  + Open your index.js file and start at the bottom
  + Create a variable named messageForm that uses "DOM Selection" to select the "leave_message" form by name attribute
  + Add an event listener to the messageForm element that handles the "submit" event
     hint: addEventListener method
  + Inside the callback function for your event listener, create three new variables (one for each of the three form fields) and retrieve the value from the event
    hint: event.target is the form, event.target.usersName is the first input element
  + Inside the callback function for your event listener, add a console.log statement to log the three variables you created in the previous step
  + Save and refresh your browser (or just check your browser for changes if using live extension)
  + Open the console in your browser if you haven't already by either right clicking on your page and select "Inspect" or by using the menu bar to open the Developer tools.
  + Fill out the HTML form in your browser and hit "Submit"
  + Note: at this point, you should notice that the browser is refreshing automatically when you submit your form which is not the desired behavior
  + Inside the callback function, above the other code you just wrote, add a new line to prevent the default refreshing behavior of the "submit" event
    hint: preventDefault method
  + Save and refresh your browser (or just check your browser for changes if using live extension)
  + Fill out the HTML form in your browser and hit "Submit"
    + You should see that the page does not refresh and your values are logged in the console
    Note: at this point, you should notice that the form is submitting properly but the form fields are not reset after submit

  + Inside the callback function, on the very last line, add a new line of code to clear the form
    hint: reset method
  + Save and refresh your browser (or just check your browser for changes if using live extension)
 
 */
