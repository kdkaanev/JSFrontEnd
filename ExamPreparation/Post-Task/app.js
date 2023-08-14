window.addEventListener("load", solve);

function solve() {
    const title = document.getElementById('task-title')
    const category = document.getElementById('task-category')
    const content = document.getElementById('task-content')
    const publishBtn = document.getElementById('publish-btn')

    publishBtn.addEventListener('click', publishBtnHandler)

    function publishBtnHandler(){
        let titleValue = title.value
        let categoryValue = category.value
        let contentValue = content.value
        if (titleValue === '' || categoryValue === '' || contentValue === '') {
            return
        }
        const reviewList = document.getElementById('review-list')
        const publishedList = document.getElementById('published-list')
        let rpostLi = addElement('li', reviewList, null, ['rpost'], )
        let article = addElement('article', rpostLi,)
        let articleH4 = addElement('h4', article, titleValue,)
        let articleCategory = addElement('p', article, `Category: ${categoryValue}`)
        let articleContent = addElement('p',article, `Content: ${contentValue}`) 
        let editBtn = addElement('button', rpostLi, 'Edit', ['action-btn', 'edit'])
        let postBtn =addElement('button', rpostLi, 'Post', ['action-btn', 'post'])

        title.value =''
        category.value = ''
        content.value = ''

        editBtn.addEventListener('click', editBtnHandler)
        postBtn.addEventListener('click', postBtnHandler)

        function editBtnHandler(){
            title.value = titleValue
            category.value = categoryValue
            content.value = categoryValue
            reviewList.innerHTML = ''
        }
        function postBtnHandler(){
            reviewList.innerHTML = ''
            editBtn.remove()
            postBtn.remove()
            publishedList.appendChild(rpostLi)
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