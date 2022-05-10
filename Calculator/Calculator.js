function calculate(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }

    let valueOne = parseInt(document.querySelector("#valueOne").value);
    let valueTwo = parseInt(document.querySelector("#valueTwo").value);
    let operator = document.querySelector("#Operator").value;
    let result = null;

    switch (operator) {
        case "+":
            result = valueOne + valueTwo;
            break;
        case "-":
            result = valueOne - valueTwo;
            break;
        case "*":
            result = valueOne * valueTwo;
            break;
        case "/":
            if (valueTwo === 0) {
                result =  "Cannot divide by 0"
            }
            else {
                result = valueOne / valueTwo;
            }
            break;
    }

    //resultHtml = '<div>' + result + '</div>';
    resultHtml = result;
    displayResult(resultHtml);
}

function displayResult(resultHtml) {
    let divResult = document.querySelector("#divResult");
    divResult.innerHTML = resultHtml;
}

document.getElementById('formCalculator').addEventListener('submit', calculate);