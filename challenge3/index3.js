var dynamictext = document.getElementById('dynamictext');

document.addEventListener('keypress', function() {
  const key = event.key;

  dynamictext.innerText = key;
})
