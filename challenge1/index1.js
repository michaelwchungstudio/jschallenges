var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');

var showtext = document.getElementById('showtext');

// This function changes the text inside the initially invisible text box.
function changeText1() {
  showtext.innerText = "I'm right!";
}

// Does the same as the other function except the text is different.
function changeText2() {
  showtext.innerText = "No, I'm right!";
}

// Button one executes one function, button two executes the other - on 'click'
button1.addEventListener('click', changeText1)

button2.addEventListener('click', changeText2)
