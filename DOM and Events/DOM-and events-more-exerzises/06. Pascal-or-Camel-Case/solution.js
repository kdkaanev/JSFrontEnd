function solve() {
  const text = document.getElementById('text')
  const convention = document.getElementById('naming-convention')
  const result = document.getElementById('result')
  let textValue = Array.from(text
                  .value
                  .toLowerCase()
                  .split(' '))
                  
  let conventionValue = convention.value
  let resultValue = ''
  if(conventionValue === "Pascal Case"){
      textValue.forEach(element =>{
        let word = element[0].toUpperCase() + element.slice(1)
        resultValue += word
      })
    }else if(conventionValue === "Camel Case"){
      for (let index = 1; index < textValue.length; index++) {
        let word = textValue[index][0].toUpperCase() + textValue[index].slice(1)
        resultValue +=  word
        
      }
      resultValue = textValue[0] + resultValue
    }else{
      resultValue += 'Error!'
    }
    result.textContent += resultValue
      
  }

  
                        
