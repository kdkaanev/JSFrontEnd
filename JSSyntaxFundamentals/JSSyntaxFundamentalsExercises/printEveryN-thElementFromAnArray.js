function printEveryNthElementFromAnArray(arrOfString, number){
    newArr = []
    for (let i = 0; i < arrOfString.length; i+=number) {
        newArr.push(arrOfString[i])
        
    }
    return newArr
}
