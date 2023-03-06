function sum(num1, num2, num3){
    let add = num1 + num2
    console.log( subtract(add, num3))
    function subtract(a, b) {
        return a-b
    }
}
//lector way
function sum1(n1,n2,n3){
    const add1 = (a, b) => a + b
    const subtract1 = (a1, b1) => a1 - b1
    console.log(subtract1(add1(n1, n2), n3))
}
