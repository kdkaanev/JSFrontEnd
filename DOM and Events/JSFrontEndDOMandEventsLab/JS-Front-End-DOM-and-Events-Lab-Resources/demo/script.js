const h1Element = document.getElementsByTagName('h1')
let secondLi = document.getElementsByTagName('li')[1]
secondLi.innerHTML += " - DONE"
let paragraph = document.getElementsByTagName('p')
let text = paragraph.textContent
paragraph.textContent = 'welcome to DOM'