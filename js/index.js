//Write date and copyright in footer of page
const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement("p");
const body = document.body;

body.append(document.createElement("footer"));
const footer = document.querySelector("footer");
copyright.innerHTML = `\u00A9 Elias Sepulveda ${thisYear}`;
footer.appendChild(copyright);
copyright.style.textAlign = "center"; // center copyright

//Skill to populate skills section
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

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

//Message board: Allows user to input user name, email address, and a message
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
  newMessage.innerHTML = "<a href='mailto:" + usersEmail + "'>" + usersName + "</a><span>" + usersMessage + "</span>";
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.setAttribute("type", "button");
  removeButton.addEventListener("click", (event) => {
    const entry = event.target.parentNode;
    entry.remove();
    const messageLi = messageSection.querySelector("li");
    if (messageLi == null) {
      messageSection.style.display = "none";
    }
  });

  newMessage.append(removeButton);
  messageList.append(newMessage);
  event.target.reset();
  const messageLi = messageSection.querySelector("li");
  if (messageLi != null) {
    messageSection.style.display = "block";
  }
});
const messageLi = document.querySelector("#messages ul");
const mesSection = document.querySelector("#messages");
if (messageLi.children.length === 0) {
  mesSection.style.display = "none";
} else {
  mesSection.style.display = "block";
}

//Project section: Used api call to Github to get a list of repositories
const projectsSection = document.getElementById("Projects");
const projectList = projectsSection.querySelector("ul");

fetch("https://api.github.com/users/eli-sep/repos")
  .then((response) => {
    console.log(response);
    if (!response.ok) {
      throw new Error(response.status + " - Projects section is empty. Sorry come back again later.");
    }
    return response.json();
  })

  .then((repositories) => {
    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement("li");
      project.innerText = repositories[i].name;
      projectList.appendChild(project);
    }

    console.log(repositories);
  })

  .catch((error) => {
    console.error("error: " + error);
    const errorMessage = document.createElement("p");
    errorMessage.innerText = error;
    projectList.remove(); //removes ul to remove border and background
    projectsSection.appendChild(errorMessage);
  });
