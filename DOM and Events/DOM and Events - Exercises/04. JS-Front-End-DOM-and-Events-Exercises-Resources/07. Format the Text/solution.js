function solve() {
  const input = document.getElementById('input')
  const output = document.getElementById('output')
  let textInput = input.value.split('.')
  textInput.pop()
  while(textInput.length > 0){
    let paragraph = textInput.splice(0, 3)
    let p = document.createElement('p')
    p.innerText = paragraph.join('.') + '.'
    output.appendChild(p)
    
    console.log(output)
    
  
  }
  
}