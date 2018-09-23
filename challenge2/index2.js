var specialhoverbox = document.getElementById('specialhoverbox');

// This function alerts the user with a message
function annoyingAlert () {
  alert("Hey, I told you not to hover over me!");
}

// When the element (box) is mouseover'd, the alert function will be called
specialhoverbox.addEventListener('mouseover', annoyingAlert)
