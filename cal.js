let currentInput = "";

function press(value) {
  if (currentInput === "0") currentInput = "";
  currentInput += value;
  document.getElementById("display").textContent = currentInput;
}

function calculate() {
  try {
    const result = eval(currentInput);
    document.getElementById("display").textContent = result;
    currentInput = result.toString();
  } catch (e) {
    document.getElementById("display").textContent = "Error";
    currentInput = "";
  }
}
