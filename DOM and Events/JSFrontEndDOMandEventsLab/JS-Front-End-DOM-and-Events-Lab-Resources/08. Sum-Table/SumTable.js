function sumTable() {
    let sum = 0
    const input = Array.from(document.querySelectorAll('body > table > tbody > tr > td:nth-child(2)'))
    input.forEach(x => sum += Number(x.textContent))
    document.getElementById('sum').textContent = sum
    console.log(sum)
    
}
