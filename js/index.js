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
