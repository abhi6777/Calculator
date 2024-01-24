// creating function for add, subtract, multiply and divide
const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;

// created variable to store the data from the user
// let firstNumber, operator, secondNumber;

// switched the case as per the operator (add, subtract, multiply, divide)
const operate = (operator, firstNumber, secondNumber) => {
  switch (operator) {
    case "+":
      return add(firstNumber, secondNumber);
      break;
    case "-":
      return subtract(firstNumber, secondNumber);
      break;
    case "*":
      return multiply(firstNumber, secondNumber);
      break;
    case "/":
      return divide(firstNumber, secondNumber);
      break;
    default:
      return "Invalid operator";
      break;
  }
};

// targeting every buttons

const allButtons = document.querySelectorAll("button");

let buttonValue;

allButtons.forEach((buttons) => {
  buttons.addEventListener("click", function () {
    buttonValue = buttons.value;
    // calculate if = button is clicked
    if (buttonValue === "=") {
      calculate();
      return;
    } else if (buttonValue === "C") {
      clearDisplay();
      return;
    } else if (buttonValue === "Backspace") {
      handleBackspace();
      return;
    }
    updateDisplay(buttonValue);
  });
});

let displayValue = "";

// function to update the display value
function updateDisplay(buttonValue) {
  displayValue += buttonValue;
  updateDisplayOnPage();
}

// function to update the display on the HTML page
function updateDisplayOnPage() {
  let displayElement = document.querySelector("#display h2");

  displayElement.textContent = displayValue;
}

// function to clear display
function clearDisplay() {
  displayValue = "";
  updateDisplayOnPage();
}

const calculate = () => {
  try {
    const tokens = displayValue.match(/[\d.]+|[^\d.]+/g);

    if (!tokens) {
      throw new Error("Invalid expression");
    }

    const stack = [];
    let currentNumber = Number(tokens[0]);

    for (let i = 1; i < tokens.length; i += 2) {
      const operator = tokens[i];
      const nextNumber = Number(tokens[i + 1]);

      switch (operator) {
        case "+":
          currentNumber = add(currentNumber, nextNumber);
          break;
        case "-":
          currentNumber = subtract(currentNumber, nextNumber);
          break;
        case "*":
          currentNumber = multiply(currentNumber, nextNumber);
          break;
        case "/":
          if (nextNumber === 0) {
            throw new Error("Division by zero");
          }
          currentNumber = divide(currentNumber, nextNumber);
          break;
        default:
          throw new Error("Invalid operator");
      }
    }

    clearDisplay();
    updateDisplay(currentNumber);
  } catch (error) {
    clearDisplay();
    updateDisplay("Error");
  }
};

function handleBackspace() {
  displayValue = displayValue.slice(0, -1);
  updateDisplayOnPage();
}
