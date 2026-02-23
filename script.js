// Fetch JSON file from GitHub Pages
fetch("courses.json")
  .then(response => response.json())
  .then(data => {

    const container = document.getElementById("courses-container");

    data.courses.forEach(course => {

      const courseCard = document.createElement("div");
      courseCard.classList.add("course-card");

      courseCard.innerHTML = `
        <h3>${course.code}</h3>
        <p><strong>Year:</strong> ${course.year_level}</p>
        <p><strong>Semester:</strong> ${course.sem}</p>
        <p>${course.description}</p>
        <p><strong>Credits:</strong> ${course.credit}</p>
      `;

      container.appendChild(courseCard);

    });

  })
  .catch(error => console.error("Error loading JSON:", error));