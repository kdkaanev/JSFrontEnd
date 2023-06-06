window.addEventListener("load", solve)

function solve() {
  const inputState = {
    firstName: null,
    lastName: null,
    age: null,
    storyTitle: null,
    genre: null,
    story: null

  }
  const inputInfo = {
    firstName: document.getElementById('first-name'),
    lastName: document.getElementById('last-name'),
    age: document.getElementById('age'),
    storyTitle: document.getElementById('story-title'),
    genre: document.getElementById('genre'),
    story: document.getElementById('story'),

  }
  const otherInfo = {
    formBtn: document.getElementById('form-btn'),
    ul: document.getElementById('preview-list'),
    main: document.getElementById('main')

  }


  otherInfo.formBtn.addEventListener('click', storyHandler)

  function storyHandler(e) {
    let inputInfovalue = Object.values(inputInfo)
      .every((input) => input.value !== '')
    if (!inputInfovalue) {
      return
    }

    const { firstName, lastName, age, storyTitle, genre, story } = inputInfo
    const li = addElement('li', otherInfo.ul, null, ['story-info'])
    const article = addElement('article', li)
    addElement('h4', article, `Name: ${firstName.value} ${lastName.value}`,)
    addElement('p', article, `Age: ${age.value}`)
    addElement('p', article, `Title: ${storyTitle.value}`)
    addElement('p', article, `Genre: ${genre.value}`)
    addElement('p', article, story.value)
    const saveBtn = addElement('button', li, 'Save Story', ['save-btn'],)
    const editBtn = addElement('button', li, 'Edit Story', ['edit-btn'])
    const deleteBtn = addElement('button', li, 'Delete Story', ['delete-btn'])

    for (const key in inputInfo) {
      inputState[key] = inputInfo[key].value

    }

    otherInfo.formBtn.setAttribute('disabled', true)
    clearAllInput()

    editBtn.addEventListener('click', editStory)
    saveBtn.addEventListener('click', saveStory)
    deleteBtn.addEventListener('click', deleteStory)

  }

  function deleteStory() {
    otherInfo.formBtn.removeAttribute('disabled')
    otherInfo.ul.innerHTML = ''
    addElement('h3', otherInfo.ul, 'Preview');
  }

  function saveStory() {
    otherInfo.main.innerHTML = ''
    addElement('h1', otherInfo.main, 'Your scary story is saved!')
  }

  function editStory() {
    for (const key in inputState) {
      inputInfo[key].value = inputState[key]


    }
    otherInfo.formBtn.removeAttribute('disabled')
    otherInfo.ul.innerHTML = ''
    addElement('h3', otherInfo.ul, 'Preview')


  }


  function clearAllInput() {
    Object.values(inputInfo)
      .forEach((input) => {
        input.value = ''
      })
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
