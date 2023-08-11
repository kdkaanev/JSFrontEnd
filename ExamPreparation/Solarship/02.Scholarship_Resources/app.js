window.addEventListener("load", solve);

function solve() {
    
    const nextBtn = document.getElementById('next-btn')

  

    nextBtn.addEventListener('click', nextBtnHandler)

    function nextBtnHandler(e){
      const studentName = document.getElementById('student').value
      const university = document.getElementById('university').value
      const score = document.getElementById('score').value
      const ulPrevieu = document.getElementById('preview-list')
      
      ulPrevieu.appendChild(addElement('li', ulPrevieu, null, ['application']))
    }


  function addElement(type, parentNode, content, classes, id, attributes, useInnerHtml) {
    const htmlElement = document.createElement(type)

    if (content && useInnerHtml) {
      htmlElement.innerHTML = content
    } else {
      if (content && type !== 'input') {
        htmlElement.textContent = content
      }

      if (content && type === 'input') {
        htmlElement.value = content
      }
    }

    if (classes && classes.length > 0) {
      htmlElement.classList.add(...classes)
    }

    if (id) {
      htmlElement.id = id
    }

    // { src: 'link', href: 'http' }
    if (attributes) {
      for (const key in attributes) {
        htmlElement.setAttribute(key, attributes[key])
      }
    }

    if (parentNode) {
      parentNode.appendChild(htmlElement)
    }

    return htmlElement
  }
  
  }
  