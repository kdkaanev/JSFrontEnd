function solve() {
  const input = document.getElementById('input')
  const output = document.getElementById('output')
  let textInput = input.value.split('.')
  textInput.pop()
  while(textInput.length > 0){
    let paragraph = textInput.splice(0, 3)
    
    console.log(paragraph)
    console.log(textInput)
    debugger
  }
  
}