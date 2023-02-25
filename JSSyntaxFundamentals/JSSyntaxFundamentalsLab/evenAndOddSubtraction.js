function solve(arr){
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i])
        newArr.push(arr[i])

        
    }
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < newArr.length; i++) {
        if(newArr[i] % 2 === 0){
            evenSum += newArr[i]
        }
        else{
            oddSum += newArr[i]
        }
        
    }
    console.log(evenSum - oddSum)
}
