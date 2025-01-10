function addExperience() {
  const container = document.getElementById("experienceInputs");
  const div = document.createElement("div");
  div.className = "input-group";
  div.innerHTML = `
    <input type="text" placeholder="Company Name">
    <input type="text" placeholder="Position">
    <input type="text" placeholder="Duration">
    <textarea placeholder="Description"></textarea>
    <button onclick="this.parentElement.remove()" class="remove-btn">Remove</button>
  `;
  container.appendChild(div);
}

function addEducation() {
  const container = document.getElementById("educationInputs");
  const div = document.createElement("div");
  div.className = "input-group";
  div.innerHTML = `
    <input type="text" placeholder="Institution">
    <input type="text" placeholder="Degree">
    <input type="text" placeholder="Year">
    <input type="text" placeholder="GPA/Score">
    <button onclick="this.parentElement.remove()" class="remove-btn">Remove</button>
  `;
  container.appendChild(div);
}

function addCertification() {
  const container = document.getElementById("certificationInputs");
  const div = document.createElement("div");
  div.className = "input-group";
  div.innerHTML = `
    <input type="text" placeholder="Certification Name">
    <input type="text" placeholder="Issuing Organization">
    <input type="text" placeholder="Year">
    <button onclick="this.parentElement.remove()" class="remove-btn">Remove</button>
  `;
  container.appendChild(div);
}

function addProject() {
  const container = document.getElementById("projectInputs");
  const div = document.createElement("div");
  div.className = "input-group";
  div.innerHTML = `
    <input type="text" placeholder="Project Name">
    <textarea placeholder="Project Description"></textarea>
    <input type="text" placeholder="Technologies Used">
    <button onclick="this.parentElement.remove()" class="remove-btn">Remove</button>
  `;
  container.appendChild(div);
}

function addSkill() {
  const container = document.getElementById("skillsInputs");
  const div = document.createElement("div");
  div.className = "input-group";
  div.innerHTML = `
    <input type="text" placeholder="Skill Name">
    <button onclick="this.parentElement.remove()" class="remove-btn">Remove</button>
  `;
  container.appendChild(div);
}

function addAchievement() {
  const container = document.getElementById("achievementInputs");
  const div = document.createElement("div");
  div.className = "input-group";
  div.innerHTML = `
    <textarea placeholder="Describe your achievement"></textarea>
    <button onclick="this.parentElement.remove()" class="remove-btn">Remove</button>
  `;
  container.appendChild(div);
}

function generateResume() {
  const preview = document.getElementById("resumePreview");

  const personalInfo = `
    <h2>Personal Information</h2>
    <p><strong>${document.getElementById("fullName").value}</strong></p>
    <p>Email: ${document.getElementById("email").value}</p>
    <p>Phone: ${document.getElementById("phone").value}</p>
    <p>Location: ${document.getElementById("location").value}</p>
  `;

  const summary = `
    <h2>Professional Summary</h2>
    <p>${document.getElementById("summary").value}</p>
  `;

  let experience = "<h2>Work Experience</h2>";
  document.querySelectorAll("#experienceInputs .input-group").forEach((exp) => {
    const inputs = exp.querySelectorAll("input, textarea");
    experience += `
      <h3>${inputs[0].value} - ${inputs[1].value}</h3>
      <p>${inputs[2].value}</p>
      <p>${inputs[3].value}</p>
    `;
  });

  let education = "<h2>Education</h2>";
  document.querySelectorAll("#educationInputs .input-group").forEach((edu) => {
    const inputs = edu.querySelectorAll("input");
    education += `
      <h3>${inputs[0].value}</h3>
      <p>${inputs[1].value}</p>
      <p>${inputs[2].value} | GPA: ${inputs[3].value}</p>
    `;
  });

  let certifications = "<h2>Certifications</h2>";
  document.querySelectorAll("#certificationInputs .input-group").forEach((cert) => {
    const inputs = cert.querySelectorAll("input");
    certifications += `
      <h3>${inputs[0].value}</h3>
      <p>${inputs[1].value} (${inputs[2].value})</p>
    `;
  });

  let projects = "<h2>Projects</h2>";
  document.querySelectorAll("#projectInputs .input-group").forEach((proj) => {
    const inputs = proj.querySelectorAll("input, textarea");
    projects += `
      <h3>${inputs[0].value}</h3>
      <p>${inputs[1].value}</p>
      <p><strong>Technologies:</strong> ${inputs[2].value}</p>
    `;
  });

  let skills = "<h2>Skills</h2><ul>";
  document.querySelectorAll("#skillsInputs .input-group input").forEach((skill) => {
    skills += `<li>${skill.value}</li>`;
  });
  skills += "</ul>";

  let achievements = "<h2>Achievements</h2><ul>";
  document.querySelectorAll("#achievementInputs .input-group textarea").forEach((achievement) => {
    achievements += `<li>${achievement.value}</li>`;
  });
  achievements += "</ul>";

  preview.innerHTML =
    personalInfo +
    summary +
    experience +
    education +
    certifications +
    projects +
    skills +
    achievements;
}

// Add initial empty fields
addExperience();
addEducation();
addCertification();
addProject();
addSkill();
addAchievement();
