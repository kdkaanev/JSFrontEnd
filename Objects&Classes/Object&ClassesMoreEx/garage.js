function garage(input){
    let carInGarage = {}
    for (const line of input) {
        let [garage, car] = line.split(' - ')
       
        if(!carInGarage.hasOwnProperty(garage)){
            carInGarage[garage] = []
        }
        carInGarage[garage].push(car)
    }
    for (const key in carInGarage) {
        console.log(`Garage № ${key}`)
        console.log(`--- ${carInGarage[key]}`)
    }
    
        
    
}
garage(
    ['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']
    )