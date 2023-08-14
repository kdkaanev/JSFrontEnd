window.addEventListener("load", solve);

function solve() {
    
    const nextBtn = document.getElementById('next-btn')
    const student = document.getElementById('student')
    const univers = document.getElementById('university')
    const sc = document.getElementById('score')
    nextBtn.addEventListener('click', nextBtnHandler)
    
    function nextBtnHandler(e){
      let studentName = student.value
      let university = univers.value
      let score = sc.value
      if(checkInformation(studentName, university,score)){
        const ulPrevieu = document.getElementById('preview-list')
        const ulCandidates = document.getElementById('candidates-list')
        let liApplication = addElement('li', ulPrevieu, null, ['application'])
        let article = addElement('article', liApplication)
        let articleH4 = addElement('h4', article, studentName)
        let articleUni = addElement('p', article, `University: ${university}`)
        let articleScore = addElement('p', article, `Score: ${score}`)
        let btnEdit = addElement('button', liApplication, 'edit', ['action-btn', 'edit'])
        let btnApply = addElement('button', liApplication,'apply', ['action-btn', 'apply'])
       
        nextBtn.disabled = true
        student.value = ''
        univers.value = ''
        sc.value = ''
        btnEdit.addEventListener('click', editHandler)
        btnApply.addEventListener('click', applyHandler)

        function editHandler(e){
          student.value = articleH4.textContent;
          univers.value = articleUni.textContent.split(": ")[1];
          sc.value = articleScore.textContent.split(": ")[1];
          btnEdit.remove();
          btnApply.remove();
          nextBtn.disabled = false;
          liApplication.remove();
        }
        function applyHandler(e){
          ulCandidates.appendChild(liApplication)

          nextBtn.disabled = false;
          btnEdit.remove();
          btnApply.remove();
          
          
        
        }

      }

    }
    

  function checkInformation(name, uni, score){
    if(name !== '' && uni !== '' && score !== ''){
      return true
    }
    else{
      return false
    }
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
  
  
