function cookingByNumbers(number, ...list){
   for (const operator of list) {
        if(operator === 'chop'){
            number /= 2
        }
        else if(operator === 'dice'){
            number = Math.sqrt(number)
        }
        else if(operator === 'spice'){
            number += 1
        }
        else if(operator === 'bake'){
            number *= 3
        }
        else if( operator === 'fillet'){
            number = number - number * 0.2
        }
        console.log(number)
   }
}
