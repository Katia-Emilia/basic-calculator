let currentDisplay = "0";
let expression = ""; 
let firstOperand = null;
let operator = null;

function updateDisplay() {
    const displayTextElement = document.getElementById("displayText");
    displayTextElement.textContent = currentDisplay;
}

function addToDisplay(digit) {
    if (currentDisplay === "0") {
        currentDisplay = digit.toString();
    } else {
        currentDisplay += digit.toString();
    }
    expression += digit.toString(); 
    updateDisplay();
}

function performOperation(op) {
    if (operator === null) {
        firstOperand = parseInt(currentDisplay);
        operator = op;
        expression += op; 
        currentDisplay = "0";
        updateDisplay();
    }
}
function calculate() {
    const secondOperand = parseInt(currentDisplay);
    let result;

    switch (operator) {
        case "+":
            result = firstOperand + secondOperand;
            break;
        case "-":
            result = firstOperand - secondOperand;
            break;
        case "*":
            result = firstOperand * secondOperand;
            break;
        case "/":
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }

    currentDisplay = result.toString();
    expression += secondOperand.toString(); 
    expression += "="; 
    expression += result.toString(); 

    firstOperand = result;
    operator = null;
    updateDisplay();
}
function onEqualClick() {
    if (operator !== null) {
        calculate();
    }
}
function clearDisplay() {
    currentDisplay = "0";
    expression = ""; // Reset the expression
    firstOperand = null;
    operator = null;
    updateDisplay();
}
document.getElementById("equal").addEventListener("click", onEqualClick);
document.getElementById("clear").addEventListener("click", clearDisplay);
