// creating function for add, subtract, multiply and divide
const add = (num1, num2) => (num1 + num2)

const subtract = (num1, num2) => (num1 - num2)

const multiply = (num1, num2) => (num1 * num2);

const divide = (num1, num2) => (num1 / num2);

// created variable to store the data from the user
let firstNumber, operator, secondNumber;

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
     };
};

// targeting every buttons

const allButtons = document.querySelectorAll("button");

let buttonValue;

allButtons.forEach(buttons => {
     buttons.addEventListener("click", function() {
          buttonValue = buttons.innerHTML;
          updateDisplay(buttonValue);
     });
});

let displayValue = "";

// function to update the display value
function updateDisplay(buttonValue){
     displayValue += buttonValue;
     updateDisplayOnPage();
};

// function to update the display on the HTML page
function updateDisplayOnPage() {
     let displayElement = document.querySelector("#display h2");

     displayElement.textContent = displayValue;
};

