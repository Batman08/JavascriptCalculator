function calculate(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }

    let valueOne = parseInt(document.querySelector("#valueOne").value);
    let valueTwo = parseInt(document.querySelector("#valueTwo").value);
    let operator = document.querySelector("#Operator").value;
    let result = null;
    
    console.log(operator);

    if (operator == "+") {
        result = valueOne + valueTwo;
    }
    else if (operator == "-") {
        result = valueOne - valueTwo;
    }
    else if (operator == "*") {
        result = valueOne * valueTwo;
    }
    else if (operator == "/") {
        result = valueOne / valueTwo;
    }

    console.log(result);
}

document.getElementById('formCalculator').addEventListener('submit', calculate);