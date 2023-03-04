function palindromeIntegers(integers){
    for (const num of integers) {
        console.log(checkNumber(String(num)))  
    }
    function checkNumber(n){
        let reversNumber = n.split("").reverse().join("");
        if(n === reversNumber){
            return true
        }else{
            return false
        }
    }
}
