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
