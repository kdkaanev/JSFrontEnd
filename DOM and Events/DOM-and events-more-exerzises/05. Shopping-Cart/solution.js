function solve() {
   let list = new Set()
   let sum = 0
   let textArea = document.querySelector('textarea')
   const product = Array.from(document.getElementsByClassName('product'))
   const checKOut = document.getElementsByClassName('checkout')[0]
   
   product.forEach(p=>{
     const add = p.querySelector(".add-product");
     add.disabled = false;
     add.addEventListener("click", () => {
       const name = p.querySelector(".product-title").textContent;
       const price = p.querySelector(".product-line-price").textContent;

       textArea.textContent += `Added ${name} for ${price} to the cart.\n`;
       list.add(name);
       sum += Number(price);
     });
   }
      )
      checKOut.addEventListener('click',checKOutHandler)
     
      function checKOutHandler(){
         textArea.textContent += `You bought ${[...list].join(', ')} for ${sum.toFixed(2)}.`
         let allButtons = document.querySelectorAll('button')
         allButtons.forEach(b=>{
            b.disabled = true
         }
         )
         
         
      }
   }
      
   


   
   
