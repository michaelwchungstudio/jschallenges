var specialhoverbox = document.getElementById('specialhoverbox');

function annoyingAlert () {
  alert("Hey, I told you not to hover over me!");
}

specialhoverbox.addEventListener('mouseover', annoyingAlert)
