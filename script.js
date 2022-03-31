var input = document.getElementById("tampilan");

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      calculate(input.value)
  }
});

function calculate(operation) {
  let result;
  try {
    result = eval(operation);
  } catch (error) {}

  document.getElementById('tampilan').value = ( result === 0 || isFinite(result) && Boolean(result) ) ? result:'Invalid operation';
}
