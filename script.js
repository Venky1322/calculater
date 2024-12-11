let currentValue = '';
let operator = '';
let previousValue = '';

function appendValue(value) {
    currentValue += value;
    updateResult();
}

function operate(op) {
    if (currentValue === '') return;
    if (previousValue !== '') calculate();
    operator = op;
    previousValue = currentValue;
    currentValue = '';
    updateResult();
}

function calculate() {
    if (previousValue === '' || currentValue === '') return;

    let result;
    const prev = parseFloat(previousValue);
    const curr = parseFloat(currentValue);

    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '÷':
            result = prev / curr;
            break;
        case '%':
            result = prev %curr;
            break;    
        default:
            return;
    }

    currentValue = result.toString();
    operator = '';
    previousValue = '';
    updateResult();
}
function clearResult() {
    currentValue = '';
    operator = '';
    previousValue = '';
    updateResult();
}

function updateResult() {
    document.getElementById('result').value = currentValue || previousValue || '0';
}
