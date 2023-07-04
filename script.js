// Function to start the quiz
function startQuiz() {
    // Redirect to the first question page
    window.location.href = "question1.html";
  }
  
  // Function to handle option selection
function selectOption(season) {
  switch (season) {
    case "summer":
      window.location.href = "outcome1.html";
      break;
    case "winter":
      window.location.href = "outcome2.html";
      break;
    case "spring":
      window.location.href = "outcome3.html";
      break;
    case "fall":
      window.location.href = "outcome4.html";
      break;
    default:
      break;
  }
}
