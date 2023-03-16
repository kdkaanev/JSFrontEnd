function piccolo(input){
    parking = []
    for (const line of input) {
        let[command, number] = line.split(',')
        if(command === 'IN' && !(parking.includes(number))){
            parking.push(number)
        }
        else if(command === 'OUT' && parking.includes(number)){
            const index = parking.indexOf(number);
            parking.splice(index, 1);
        }
    }
    parking.sort()
    if(parking.length > 0){
        for (const line of parking) {
            console.log(line)
        }
    }
    else{
        console.log("Parking Lot is Empty")
    }
    
}

