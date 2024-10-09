let firstNumber = null;
let operator = null;
let secondNumber = null;
let displayValue = "0";

let btns = document.querySelectorAll("button");
let result = document.querySelector(".result");

result.textContent = "0";

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value == "AC") {
      resetCalculator();
    }
    if (!isNaN(value)) {
      if (displayValue === "0") {
        displayValue = value;
      } else {
        displayValue += value;
      }
      result.textContent = displayValue;
    }
    if (value === '.') {
        if (!displayValue.includes('.')) {
            displayValue += value; 
            result.textContent = displayValue; 
        }
        return; 
    }
    if (value === "+" || value === "-" || value === "*" || value === "/") {
      if (firstNumber === null) {
        firstNumber = parseFloat(displayValue);
      } else if (operator !== null && displayValue !== "") {
        secondNumber = parseFloat(displayValue);
        let resultValue = operate(firstNumber, operator, secondNumber);
        result.textContent = resultValue.toFixed(2);
        firstNumber = resultValue;
      }
      operator = value;
      displayValue = "";
    }
    if (value === "=") {
      secondNumber = parseFloat(displayValue);
      if (firstNumber !== null && operator !== null && secondNumber !== null) {
        let resultValue = operate(firstNumber, operator, secondNumber);
        result.textContent = resultValue.toFixed(2);
        displayValue = resultValue.toFixed(2).toString();
        firstNumber = null;
        operator = null;
        secondNumber = null;
      }
    }
  });
});

function resetCalculator() {
  firstNumber = null;
  operator = null;
  secondNumber = null;
  displayValue = "0";
  result.textContent = displayValue;
}

const add = function (a, b) {
  return a + b;
};

const minus = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

function operate(firstNumber, operator, secondNumber) {
  if (operator == "+") {
    return add(firstNumber, secondNumber);
  } else if (operator == "-") {
    return minus(firstNumber, secondNumber);
  } else if (operator == "*") {
    return multiply(firstNumber, secondNumber);
  } else if (operator == "/") {
    return divide(firstNumber, secondNumber);
  }
}
