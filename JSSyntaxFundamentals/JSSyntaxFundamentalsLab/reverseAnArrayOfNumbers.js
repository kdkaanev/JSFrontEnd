function reverse(n, inputArr){
    let arr = [];
    for (let i = 0; i < n; i++) {
       arr.push(inputArr[i])

        
    }
    arr = arr.reverse()
    console.log(arr.join(' '))
}
