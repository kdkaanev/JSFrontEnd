function phoneBook(strings){
    let book = {}
    for (const line of strings) {
        let info = line.split(' ')
        let name = info[0]
        let tel = info[1]
        book[name] = tel
    }
    for (const key in book) {
       console.log(`${key} -> ${book[key]}`)
    }
}

