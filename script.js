
let projectsArray = [
    {
        title: "Keeper",
        builtUsing: "React",
        desc: "Google keep clone",
        link: "https://github.com/krishnasree5/google-keep-clone"
    },
    {
        title: "Login Page",
        builtUsing: "HTML, CSS, Nodejs, Express, ejs and PostgreSQL",
        desc: "Login and Register page with Authentication",
        link: "https://github.com/krishnasree5/Register-Login-Authentication"
    },
    {
        title: "Cafe Round the Corner",
        builtUsing: "HTML, CSS, Bootstrap",
        desc: "A website for a coffee shop designed with bootstrap.",
        link: "https://github.com/krishnasree5/Cafe-Round-the-Corner"
    }
]

const showMoreBtn = document.getElementById('show');
const projectContainer = document.querySelector('.project-container');
const projects = document.querySelector("#projects")

function createProjectElement(project) {
  const projectDiv = document.createElement('div');
  projectDiv.innerHTML = `
    <h2>${project.title}</h2>
    <p>Built using: ${project.builtUsing}</p>
    <p>Description: ${project.desc}</p>
    <p>Github Repo: 
        <a href="${project.link}" target="_blank">
          <i class="bi bi-box-arrow-up-right link"></i>
        </a>
    </p>
  `;
  return projectDiv;
}

function addAdditionalProjects() {

    projectsArray.forEach(project => {
        const projectElement = createProjectElement(project);
        projectContainer.appendChild(projectElement);
    });

    showMoreBtn.style.display = 'none';
    const githubProfile = document.createElement("p")
    githubProfile.innerHTML = `
        <p><a href="https://github.com/krishnasree5/" target="_blank">See more on Github</a></p>
    `
    projects.appendChild(githubProfile); 
}

showMoreBtn.addEventListener('click', addAdditionalProjects);