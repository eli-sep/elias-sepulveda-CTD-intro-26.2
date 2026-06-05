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
  // body.append(newMessage);
  console.log("innerHTML", newMessage.innerHTML);
  console.log(newMessage);
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

console.log(projectsSection);
console.log(projectList);

/*
    Creating your fetch
     + Open your index.js file, starting below the code from the previous lesson
     + Using the Fetch API, create a "GET" request to https://api.github.com/users/{GITHUB_USERNAME}/repos where {GITHUB_USERNAME} is your username for your GitHub account
        hint: the fetch function
        hint: "GET" is the default method for fetch
 + Chain a then method to your fetch call and pass it a function that returns the response JSON data


Handle your JSON data
    + Chain another then method and pass it a callback function to parse the response and store it in a variable named repositories
    + hint: JSON.parse(this.response)
    + Console.log the value of repositories to better see the data returned from your API fetch
    + Save and refresh your browser (or just check your browser for changes if using live extension)
    + You should see the list of your GitHub repositories displayed in your console.


Handling errors
 Chain a catch() function to your fetch call to handle errors from the server so the user would know what happened if your Projects section was empty.


Display Repositories in List
 + Create a variable named projectSection; using "DOM Selection" to select the projects section by id
 + Create a variable named projectList; using "DOM Selection" query the projectSection (instead of the entire document) to select the
element
 Create a for loop to iterate over your repositories Array, starting at index 0
 Inside the loop, create a variable named project to make a new list item (li) element
hint: createElement method
 On the next line, set the inner text of your project variable to the current Array element's name property
hint: access the Array element using bracket notation
 On the next line, append the project element to the projectList element
hint: appendChild method
 Save and refresh your browser (or just check your browser for changes if using live extension)
You should see your list of repositories beneath the "Projects" heading on your portfolio site

Style your Repository List
 Open your index.css file
 Add styling to your projects list, be sure to account for any changes you want in media queries
 STRETCH GOAL: Use flexbox (or grid) to style your list of repositories
By the end of this assignment, you should have a working API fetch to your GitHub account and be able to see a list of your repository names in the Projects section of your portfolio.  Were there to be a server error during the API fetch, your site would return an error message.  Your project list should be styled using flexbos or grid.
Backup to the cloud
Once you've made the above changes to your index.js file, follow the below instructions to push a copy from your local machine like you did at the end of last assignment. Confirm your code gets copied to GitHub by adding changes to staging, committing the staged changes, and pushing them from your local machine to GitHub:

 Check the status of the changes you just made (code changes to the index.js files) by running git status in your terminal
 Stage all your changes for commit by running git add . in your terminal
 Run git status again to see how things have changed. You should get a response indicating changes staged for commit.
 Create a commit message for reference. You can use a different message if you wish. Run git commit -m "API fetch completed"
 Push these changes to your GitHub repository from your local computer by running git push

  */
