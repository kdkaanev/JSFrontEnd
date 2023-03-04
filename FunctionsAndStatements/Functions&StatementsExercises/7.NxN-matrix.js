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
    matrix.forEach(v=>console.log(...v));
}
