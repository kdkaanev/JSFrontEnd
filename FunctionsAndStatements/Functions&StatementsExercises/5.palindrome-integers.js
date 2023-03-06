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
function palindromeIntegers1(integers){
    integers.forEach(num => {
        console.log(isPalindrome(num))
    });
    function isPalindrome(num){
        let reversed = Number([...num.toString()].reverse().join(''))
        return reversed === num
    }
}
palindromeIntegers1([123,321,111,123456])