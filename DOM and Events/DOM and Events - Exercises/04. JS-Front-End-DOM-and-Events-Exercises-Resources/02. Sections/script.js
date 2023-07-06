function create(words) {
   const content = document.getElementById('content');
   
   for (const word of words) {
      const newDiv = document.createElement('div')
      const newParagraph = document.createElement('p')
      newParagraph.textContent = word
      newParagraph.style.display = 'none'

      newDiv.addEventListener('click',clickEventHeandler)

      function clickEventHeandler(event){
         const div = event.currentTarget;
         const p = div.children[0]
         p.style.display = 'block'
      }
      // ataching to DOM Tree
      newDiv.appendChild(newParagraph)
      content.appendChild(newDiv)
      
   }
   
}
