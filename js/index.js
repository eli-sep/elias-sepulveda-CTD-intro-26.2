const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement("p");
const footer = document.createElement("footer");

const skills = [
  "Proficient in I.T. and computer networking",
  "Advanced electrical knowledge",
  "Expert abilities in building automation and control system design and engineering",
  "Superb troubleshooting skills in areas of electrical systems, working, mentation devices, program sequence verification",
  "Codecademy: p5.js course - completed",
  "Code the dream - Intro to Programming - in progress",
];

const conciseSkills = [
  "HTML/CSS/JavaScript",
  "VS Code",
  "Git and GitHub",
  "Building Controller Programming",
  "Building Automation",
  "Control System Design and Engineering",
  "I.T Support",
  "Computer Networking",
  "Electrical Control Systems",
  "Electrical Troubleshooting",
  "Electrical Theory",
];

const skillSection = document.querySelector("#skills");
const skillsList = skillSection.querySelector("ul");

copyright.innerHTML = `\u00A9 Elias Sepulveda ${thisYear}`;

const body = document.body;

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

body.append(footer);
footer.appendChild(copyright);
copyright.style.textAlign = "center"; // center copyright

console.log(today);
console.log(thisYear);
console.log(copyright.textContent);
console.log(skillSection);
console.log(skillsList);

