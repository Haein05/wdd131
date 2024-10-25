function getGrades(inputSelector) {
    // Get grades from the input box
    const grades = document.querySelector(inputSelector).value;
    // Split them into an array
    const gradesArray = grades.split(",");
    // Clean up spaces and make grades uppercase
    const cleanGrades = gradesArray.map((grade) => grade.trim().toUpperCase());
    return cleanGrades;
  }
  
  function lookupGrade(grade) {
    // Converts letter grade to GPA point value
    let points = 0;
    if (grade === "A") {
      points = 4;
    } else if (grade === "B") {
      points = 3;
    } else if (grade === "C") {
      points = 2;
    } else if (grade === "D") {
      points = 1;
    }
    return points;
  }
  
  function calculateGpa(grades) {
    // Convert letter grades to GPA points
    const gradePoints = grades.map((grade) => lookupGrade(grade));
    // Calculate GPA
    const gpa = gradePoints.reduce((total, num) => total + num) / gradePoints.length;
    return gpa.toFixed(2);
  }
  
  function outputGpa(gpa, selector) {
    // Display GPA in the specified HTML element
    const outputElement = document.querySelector(selector);
    outputElement.innerText = `Your GPA is: ${gpa}`;
  }
  
  function clickHandler() {
    // Handle button click event
    const grades = getGrades("#grades");
    const gpa = calculateGpa(grades);
    outputGpa(gpa, "#output");
  }
  
  // Add event listener to button
  document.querySelector("#submitButton").addEventListener("click", clickHandler);
  