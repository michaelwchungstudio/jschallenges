var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');

var showtext = document.getElementById('showtext');

function changeText1() {
  showtext.innerText = "I'm right!";
}

function changeText2() {
  showtext.innerText = "No, I'm right!";
}

button1.addEventListener('click', changeText1)

button2.addEventListener('click', changeText2)
