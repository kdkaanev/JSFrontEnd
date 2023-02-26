function solve(number){
    let sum = 0
    let digit
   while(number){
    digit = number % 10
    sum += digit
    number = Math.floor(number / 10)
   }
   console.log(sum)
}
