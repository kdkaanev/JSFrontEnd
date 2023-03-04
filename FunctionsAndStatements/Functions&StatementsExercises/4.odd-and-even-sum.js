function oddAndEvenSum(number){
    let oddSum = 0
    let evenSum = 0
    let strNumber = number.toString()
  for (let i = 0; i < strNumber.length; i++) {
    let intNum = parseInt(strNumber[i])
    if(intNum % 2 === 0){
        evenSum += intNum
    }else{
        oddSum += intNum
    }
    
  }
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`

}
