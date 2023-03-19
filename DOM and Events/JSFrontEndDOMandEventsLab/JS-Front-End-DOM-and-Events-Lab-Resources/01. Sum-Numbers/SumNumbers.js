function calc() {
    let num1 = document.getElementById('num1')
    let num2 = document.getElementById('num2')
    let sumInput = document.getElementById('sum')
    let firstNum = Number(num1.value)
    let secondNum = Number(num2.value)
    let sum = firstNum + secondNum

    sumInput.value = sum
}
