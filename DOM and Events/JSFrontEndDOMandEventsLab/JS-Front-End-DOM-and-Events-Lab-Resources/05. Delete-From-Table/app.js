function deleteByEmail() {
    const result = document.getElementById('result')
    const input = document.querySelector('body > label > input[type=text]')
    const evenTd = Array.from(document.querySelectorAll('td:nth-child(2)'))
    let emailValue = input.value
    let foundElement = evenTd.find((td) => td.textContent === emailValue)
    if(foundElement){
        foundElement.parentElement.remove()
        result.textContent = 'Deleted'
        
    }else{
        result.textContent = 'Not found.'
    }

}
