function pointsValidation(arr){
  
    for (let index = 0; index < 3; index++) {
        let x1 = arr[0]
        let y1 = arr[1]
        let x2 = arr[2]
        let y2 = arr[3]
        if (index === 0){
           x2 = 0
           y2 = 0
        }else if(index === 1){
            x1 = x2
            y1 = y2
            x2 = 0
            y2 = 0
        }
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}}  ${result(distance(x1, y1, x2, y2))}`)
        
        
    }
    function distance(x1, y1, x2, y2){
        let distance = Math.sqrt(Math.pow((x2 -x1) ,2) + Math.pow((y2 -y1), 2))
        return distance
    }

    function result(dist){
        if (Number.isInteger(dist)){
            return 'is valid'
        }else{
            return 'is invalid'
        }
    }

    
    console.log(distance)
}
pointsValidation([2, 1, 1, 1])