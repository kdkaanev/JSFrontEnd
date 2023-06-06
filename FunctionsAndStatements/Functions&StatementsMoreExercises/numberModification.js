function numberModification(number){
    let num = number
    let count = (''+ num).length
    let moreCount = count
    const addNumber = '9'
    let sum = 0
    for (let index = count; index > 0; index--) {
        sum += num % 10
        num = Math.floor(num / 10)
        
    }
    let averige = sum / moreCount
    if(averige > 5){
        console.log(number)
        return
    }else{
        while(averige <=5){
            number = Number(number + addNumber)
            moreCount += 1
            sum += Number(addNumber)
            averige = sum / moreCount
        }
    }
    console.log(number)
}
    



numberModification(5835)