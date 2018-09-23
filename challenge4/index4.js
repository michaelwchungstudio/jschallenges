// These variables are established by the input values of the boxes next to each category.
var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');
var switchtext = document.getElementById('switchtext');

var submit = document.getElementById('submit');

// Function that checks two things:
// 1. The inputted password must be '12345678'.
// 2. The username must contain at least one number.
function checkInputs() {
  // Creates a default false variable since the username condition has not been met (blank).
  var usernameHasNum = false;

  // Cycles through the username character by character.
  for (var i = 0; i < (username.value).length; i++) {
    // 'If' condition checks if the character at position 'i' in the username isn't not a number (simply put, if it's a number)
    if (!isNaN((username.value).charAt(i))) {
      // If the character is a number, change the default false variable to true, then exit the loop - since only one character must be a number.
      usernameHasNum = true;
      break;
    }
  }

  // 'If' condition with two statements
  // 1. If the inputted password value (trimmed in case of extraneous spaces) is exactly equal to the string "12345678"
  // 2. If the previous loop's condition was met and the default variable is true.
  if (((password.value).trim() === "12345678") && usernameHasNum) {
    // Changes the H1 text
    switchtext.innerText = "Successful login!";
  }
  else {
    // alerts the user if BOTH conditions are not met.
    alert("incorrect");
  }
}

// When the submit button is clicked, execute the above function.
submit.addEventListener('click', checkInputs)
