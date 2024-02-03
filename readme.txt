const input = document.querySelector("input");
const buttons = document.querySelectorAll("button");

let currentExpression = "";

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const buttonText = e.target.textContent;

        switch (buttonText) {
            case "=":
                calculateResult();
                break;
            case "AC":
                clearAll();
                break;
            case "DEL":
                deleteLast();
                break;
            case "CE":
                clearEntry();
                break;
            case "π":
                appendToExpression(Math.PI);
                break;
            case "e":
                appendToExpression(Math.E);
                break;
            case "√":
                appendToExpression("Math.sqrt(");
                break;
            case "Sin":
                appendToExpression("Math.sin(");
                break;
            case "Cos":
                appendToExpression("Math.cos(");
                break;
            case "Tan":
                appendToExpression("Math.tan(");
                break;
            case "Log":
                appendToExpression("Math.log10(");
                break;
            default:
                appendToExpression(buttonText);
                break;
        }
    });
});

function calculateResult() {
    try {
        currentExpression = String(eval(currentExpression));
        input.value = currentExpression;
    } catch (error) {
        input.value = "Error";
    }
}

function clearAll() {
    currentExpression = "";
    input.value = "";
}

function deleteLast() {
    currentExpression = currentExpression.slice(0, -1);
    input.value = currentExpression;
}

function clearEntry() {
    currentExpression = "";
    input.value = "0";
}

function appendToExpression(value) {
    currentExpression += value;
    input.value = currentExpression;
}
