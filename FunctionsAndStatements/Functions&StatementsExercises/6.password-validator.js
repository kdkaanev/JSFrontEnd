function passwordValidator(pass){
    if(length(pass) && consist(pass) && leastTwoDigits(pass)){
        console.log("Password is valid")
    }else{
        console.log(length(pass))
        console.log(consist(pass))
        console.log(leastTwoDigits(pass))
    }
    function length(text){
        if(text.len5gth > 5 && text.len5gth < 11){
            return true
        }
           
        console.log("Password must be between 6 and 10 characters")
        
    }
    function consist(text){
        const pattern = /^[a-zA-Z0-9]+$/;
        const result = pattern.test(text)
        if(result){
            return true
        }
        console.log("Password must consist only of letters and digits")

        }
    function leastTwoDigits(text){
        let count = 0
        for (let i = 0; i < text.length; i++) {
            if(text[i] >=0 && text[i] < 10){
                count += 1

            }
            if(count >= 2){
                return true
            }
            else{
                console.log("Password must consist only of letters and digits")
            }
            
        }
    }
}

    passwordValidator('logIn')
