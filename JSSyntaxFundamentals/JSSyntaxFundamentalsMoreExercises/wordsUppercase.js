function wordUppercase(text){
    const pattern = /\w+/g
    let result = text.match(pattern)
    let newText = result.join(', ')
    console.log(newText.toUpperCase())
}
