function solve(input){
  let catalogue = {};
  let listProduct = [];
  for (let line of input) {
    line = line.split(" : ");
    listProduct.push(line);
  }
  let sortedList = listProduct.sort((a, b) => a[0].localeCompare(b[0]));
  for (const product of sortedList) {
    let key = product[0][0];
    if (key in catalogue) {
      catalogue[key].push(product);
    } else {
      catalogue[key] = [product];
    }
  }

  for (const key in catalogue) {
    console.log(key);
    for (const [product, price] of catalogue[key]) {
      console.log(`  ${product}: ${price}`);
    }
  }
}   