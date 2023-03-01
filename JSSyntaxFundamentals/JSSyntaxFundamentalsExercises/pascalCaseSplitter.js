function pascalCaseSplitter(myString){
  
    const regex = /[A-Z][a-z]*/g;
    const result = myString.match(regex);
    
    console.log(result.join(", "));
    
    
    

}
