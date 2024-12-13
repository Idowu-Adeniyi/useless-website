// DOM references & variable declarations
let ageLimit = 18; // minimum age required
let currentYear = new Date().getFullYear();
let displayMsg = document.getElementById("input-result");
const userInput = document.querySelector(".user");
const userContainer = document.querySelector(".legend-container");
const babyContainer = document.querySelector(".wrapper");
let accessDoorButton = document.querySelector(".btn");
let baby1 = document.getElementById("baby1");
let baby2 = document.getElementById("baby2");
let baby3 = document.getElementById("baby3");
let baby4 = document.getElementById("baby4");
let baby5 = document.getElementById("baby5");
accessDoorButton.disabled = true; // Disable access door button

// Function to open the door
const openDoor = function () {
  accessDoorButton.addEventListener("click", () => {
    userContainer.style.display = "none";
    babyContainer.style.display = "block";
    baby1.style.display = "none"; // Hide all initially
  });
};

// Array of baby elements
const babyArr = [baby1, baby2, baby3, baby4, baby5];

// Event listener to show a random baby on mouseover
babyContainer.addEventListener("mouseover", (e) => {
  // Hide all babies first
  babyArr.forEach((baby) => {
    baby.style.display = "none";
  });

  // Generate a random index to select a baby
  const randomIndex = Math.floor(Math.random() * babyArr.length);

  // Display only the randomly selected baby
  babyArr[randomIndex].style.display = "block";
});

// Function for input validation
function checkAge() {
  let userBirthyear = document.querySelector(".user").value;
  let age = currentYear - parseInt(userBirthyear);

  // Regex pattern to test for birth year
  const birthYearPattern = /^(19[0-9]{2}|20[0-2][0-9])$/;

  // Test user input to match birthyear pattern
  const birthYearPatternTest = birthYearPattern.test(userBirthyear);

  // Checks if input field is empty
  if (userBirthyear === "") {
    userInput.style.backgroundColor = "red";
    displayMsg.textContent = `Please enter birth year`;
    displayMsg.style.color = "red";
  } else if (isNaN(userBirthyear)) {
    // Checks if user input is a number
    displayMsg.textContent = `Please enter a number`;
    displayMsg.style.color = "red";
    accessDoorButton.disabled = true;
  } else if (!birthYearPatternTest) {
    // Checks if user input is a valid birth year
    displayMsg.textContent = `Please enter a valid birth year!`;
    displayMsg.style.color = "red";
    accessDoorButton.disabled = true;
  } else if (age >= ageLimit) {
    // Checks if user is above age limit
    displayMsg.textContent = `You are ${age} years old. Ready to open the door?`;
    displayMsg.style.color = "green";
    accessDoorButton.disabled = false; // Enable access button
    openDoor(); // Call the function to open the door
    userInput.style.backgroundColor = "white";
  } else {
    // If age is below age limit
    displayMsg.textContent = `You are ${age} years old and underage.`;
    displayMsg.style.color = "red";
    accessDoorButton.disabled = true;
  }
}

// Real-time validation on input
userInput.addEventListener("input", checkAge);
