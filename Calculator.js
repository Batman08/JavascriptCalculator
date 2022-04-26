function calculate(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }

    let valueOne = parseInt(document.querySelector("#valueOne").value);
    let valueTwo = parseInt(document.querySelector("#valueTwo").value);
    let operator = document.querySelector("#Operator").value;
    let result = null;

    if (operator === "+") {
        result = valueOne + valueTwo;
    }
    else if (operator === "-") {
        result = valueOne - valueTwo;
    }
    else if (operator === "*") {
        result = valueOne * valueTwo;
    }
    else if (operator === "/") {
        result = valueOne / valueTwo;
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