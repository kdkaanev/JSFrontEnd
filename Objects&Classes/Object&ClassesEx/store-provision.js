<<<<<<< HEAD
function storeProvision(...arr) {
  let provisions = {};
  let ordered = {};
  storeProduct = arr[0];
  orderProduct = arr[1];
  let key = [];

  let value = [];

  for (let i = 0; i < storeProduct.length; i++) {
    if (i % 2 === 0) {
      key.push(storeProduct[i]);
    } else {
      value.push(Number(storeProduct[i]));
    }
  }
    key.forEach((k, i) => (provisions[k] = value[i]));
   
    let key1 = []
    let value1= []
   for (let i = 0; i < orderProduct.length; i++) {
   
    if (i % 2 === 0) {
      key1.push(orderProduct[i]);
    } else {
      value1.push(Number(orderProduct[i]));
    }
  }
}
key.forEach((k, i) => (ordered[k] = value[i]));

for (const key in ordered) {
  if (key in provisions) {
    provisions[key] += ordered[key];
  } else {
    provisions.key = ordered[key];
  }
}


storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
)
=======
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

>>>>>>> 67b086e2927fed68e4ce239af9c66d7d10702322
