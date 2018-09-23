var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');
var switchtext = document.getElementById('switchtext');

var submit = document.getElementById('submit');

function checkInputs() {
  var usernameHasNum = false;

  for (var i = 0; i < (username.value).length; i++) {
    if (!isNaN((username.value).charAt(i))) {
      usernameHasNum = true;
      break;
    }
  }

  if (((password.value).trim() === "12345678") && usernameHasNum) {
    switchtext.innerText = "Successful login!";
  }
  else {
    alert("incorrect");
  }
}

submit.addEventListener('click', checkInputs)
