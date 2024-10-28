if (!localStorage.getItem("botScore")) {
  localStorage.setItem("botScore", 0);
}

// Function to update the score display
function updateScoreDisplay() {
  const scoreDisplay = document.getElementById("scoreDisplay");
  scoreDisplay.textContent = localStorage.getItem("botScore");
}

// Initial display of the score
updateScoreDisplay();

document.querySelector("button").addEventListener("click", addAnotherOne);
document.getElementById("resetButton").addEventListener("click", resetScore);

function addAnotherOne() {
  let botScoreVal = Number(localStorage.getItem("botScore"));
  botScoreVal += 1;
  localStorage.setItem("botScore", botScoreVal);

  // Update the score display after incrementing
  updateScoreDisplay();
}

function resetScore() {
  localStorage.setItem("botScore", 0); // Reset the score to 0
  updateScoreDisplay(); // Update the display
}
