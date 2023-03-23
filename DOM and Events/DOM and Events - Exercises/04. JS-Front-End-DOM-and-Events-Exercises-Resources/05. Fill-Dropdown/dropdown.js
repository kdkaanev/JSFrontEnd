function addItem() {
    select = document.getElementById('menu')
    newItemText = document.getElementById('newItemText')
    newItemValue = document.getElementById('newItemValue')

    text = newItemText.value
    value = newItemValue.value

    option = document.createElement('option')
    option.textContent = text
    option.value = value
    select.appendChild(option)

    newItemText.value = ''
    newItemValue.value = ''

}