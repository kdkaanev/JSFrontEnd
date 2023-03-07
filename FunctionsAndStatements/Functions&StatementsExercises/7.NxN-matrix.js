function nXnMatrix(n){
    let matrix = []
    for (let i = 0; i < n; i++) {
        matrix.push(row(n))
        
    }
    function row(n){
        let column = []
        for (let i = 0; i < n; i++) {
            column.push(n)
            
        }
        return column
    }
    matrix.forEach(v=>console.log(...v))
}
function nXnMatrix1(n){
    new Array(n).fill(new Array(n).fill(n)).forEach(row => console.log(row.join(" ")))
}
nXnMatrix1(6)