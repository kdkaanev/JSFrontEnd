function convertToObject(json){
    let obj = JSON.parse(json)
    obj = Object.entries(obj)
    for (const [key, value] of obj) {
        console.log(`${key}: ${value}`)
    }
}
