function carWash(input){
    let cleaned = 0
    for (const command of input) {
        if (command=== 'soap'){
            cleaned += 10
        }else if(command === 'water'){
            cleaned *= 1.2
        }else if(command === 'vacuum cleaner'){
            cleaned *= 1.25
        }else if(command === 'mud'){
            cleaned *= 0.9
        }
    }
    console.log(`The car is ${cleaned}% clean.`)

}


carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])