// script.js
let currentInput = "";
let previousInput = "";
let operator = null;

const display = document.getElementById('display');

// Function to append a number to the display
function appendNumber(number) {
  currentInput += number;
  display.value = currentInput;
}

// Function to set an operator (+, -, *, /)
function setOperator(op) {
  if (currentInput === "") return;
  if (previousInput !== "") {
    calculate();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = "";
  display.value = "";
}

// Function to clear the display
function clearDisplay() {
  currentInput = "";
  previousInput = "";
  operator = null;
  display.value = "";
}

// Function to perform the calculation
function calculate() {
  if (currentInput === "" || previousInput === "") return;

  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  switch (operator) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      if (current === 0) {
        result = "Error";
      } else {
        result = prev / current;
      }
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = null;
  previousInput = "";
  display.value = currentInput;
}
