function subtract() {
    let num1 = document.getElementById('firstNumber').value;
    let num2 = document.getElementById('secondNumber').value;

    let result = 0;
    result = parseFloat(num1) - parseFloat(num2);
    document.getElementById('result').innerHTML = result;
}