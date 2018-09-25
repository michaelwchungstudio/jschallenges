var dynamictext = document.getElementById('dynamictext');

// On any keypress within the entire document, the function written within will be called.
document.addEventListener('keypress', function() {
  // Constant variable that grabs the value of the key pressed.
  const key = event.key;

  // Changes the text within the text box to the variable.
  dynamictext.innerText = key;
  // dynamictext.innerText += key;
  // Above statement would append keypress each time (simulates typing!)
})
