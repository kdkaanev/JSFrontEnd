function passwordValidator(pass){
    let l =false
    let c = false
    let least = false
    length(pass)
    consist(pass)
    leastTwoDigits(pass)
   
    function length(text){
        if(text.length > 5 && text.length < 11){
            return l = true
        }
           
        console.log("Password must be between 6 and 10 characters")
        
    }
    function consist(text){
        const pattern = /^[a-zA-Z0-9]+$/;
        const result = pattern.test(text)
        if(result){
            return c = true
        }
        console.log("Password must consist only of letters and digits")

        }
    function leastTwoDigits(text){
        let count = 0
        for (let i = 0; i < text.length; i++) {
            let chrInt = parseInt(text[i])
            if(chrInt >=0 && chrInt < 10){
                count += 1

            }
           
            
        }
        if(count >= 2){
            return least = true
        }
        else{
            console.log("Password must have at least 2 digits")
        }
    }if(l && c && least){
        console.log("Password is valid")
    }
    
}


