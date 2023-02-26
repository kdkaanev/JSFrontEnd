function fruit(type, weight, price){
    let kilograms = (weight / 1000)
    let sum = (kilograms * price).toFixed(2)
    
    console.log(`I need $${sum} to buy ${kilograms.toFixed(2)} kilograms ${type}.`)
}
