function sumTable() {
    let sum = 0
    const input = Array.from(document.querySelectorAll('td:nth-child(even)'))
    input.pop()
    let costs = input
    for (const cost of costs.values()) {
        sum += Number(cost)
    }
    console.log(sum)
}
