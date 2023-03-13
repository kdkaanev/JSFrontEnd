function storeProvision(...arr){
    let store = {}
    let [currentStok, ordered] = [arr[0], arr[1]]
    for (let i = 0; i < currentStok.length; i++) {
        if(i % 2 === 0){
            store[currentStok[i]] = 0
        }
        else{
            store[currentStok[i - 1]] += Number(currentStok[i])
        }
        
    }
    for (let i = 0; i < ordered.length; i++) {
        if(i % 2 === 0 ){
            if(ordered[i] in store){
                continue
            }else{
                store[ordered[i]] = 0
            }
            
        }
        else{
            store[ordered[i -1]] += Number(ordered[i])


        }
        
    }
    for (const product in store) {
        
            console.log(`${product} -> ${store[product]}`)
        }
    }

