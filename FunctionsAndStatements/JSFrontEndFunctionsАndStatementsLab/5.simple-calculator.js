function simpleCalculator(numOne, numTwo, operator){
    const multiply = (a,b) => a * b
    const  divide = (a,b) => a / b
    const  add = (a, b) => a + b
    const  subtract = (a, b) => a - b

    const operationMap = {
        multiply,
        divide,
        add,
        subtract
    }
    return operationMap[operator](numOne, numTwo)
}