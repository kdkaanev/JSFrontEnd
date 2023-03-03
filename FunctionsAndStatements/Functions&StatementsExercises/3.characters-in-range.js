function charactersInRange(chr1, chr2) {
    
    
    
    let listChr = []
    orderedChr(chr1, chr2)
    for (let i = chr1.charCodeAt(0) + 1; i <= chr2.charCodeAt(0) - 1; i++) {
        listChr.push(String.fromCharCode(i))
    
    }
    console.log(listChr.join(" "))
    function orderedChr(a, b) {
        if(a.charCodeAt(0) > b.charCodeAt(0)){
            chr1 = b
            chr2 = a
            return 
        }
}
}

