function solve(number){
    let sum = 0
    let digit
    let newDigit
    let same = false
   while(number){
    digit = number % 10
    sum += digit
    number = Math.floor(number / 10)
    newDigit = number % 10
    if(number <= 0){
        break
    }
    if(newDigit === digit){
        same = true
    }

   }
   console.log(same)
   console.log(sum)
}

