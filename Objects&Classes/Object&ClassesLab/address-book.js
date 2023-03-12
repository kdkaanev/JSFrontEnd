function addressBook(strArr){
    book = {}
    for (const line of strArr) {
        let info = line.split(':')
        let[name, street] = [info[0], info[1]]
        book[name] = street
    }
    sortedBook = Object.entries(book).sort()
    for (const line of sortedBook) {
        console.log(`${line[0]} -> ${line[1]}`)
    }
    }

