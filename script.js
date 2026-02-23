// Store all courses globally
let allCourses = [];

// Fetch JSON file from GitHub Pages
fetch("courses.json")
  .then(response => response.json())
  .then(data => {

    allCourses = data.courses; // save all courses
    displayCourses(allCourses); // display initially

  })
  .catch(error => console.error("Error loading JSON:", error));


// Function to display courses
function displayCourses(courses) {

  const container = document.getElementById("courses-container");
  container.innerHTML = ""; // clear previous content

  courses.forEach(course => {

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

}


// Search functionality
document.getElementById("searchInput").addEventListener("input", function () {

  const keyword = this.value.toLowerCase();

  const filteredCourses = allCourses.filter(course =>
    course.description.toLowerCase().includes(keyword)
  );

  displayCourses(filteredCourses);

});
