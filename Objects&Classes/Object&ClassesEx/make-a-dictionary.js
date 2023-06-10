function makeADictionary(input){
    let dictionary = {}
    for (const json of input) {
        let newDict = JSON.parse(json)
        let entries = Object.entries(newDict)
        for(let [key, value] of entries){
            if(key in dictionary){
                dictionary[key] = value
            }
            dictionary[key] = value
        }
        
        
        
     
    }
    let sortDict =  Object
            .keys(dictionary)
            .sort()
            .reduce((res, key) => (res[key] = dictionary[key],res), {})
    for (const key in sortDict) {
        console.log(`Term: ${key} => Definition: ${sortDict[key]}`)
            
        }
    }
    
    

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )