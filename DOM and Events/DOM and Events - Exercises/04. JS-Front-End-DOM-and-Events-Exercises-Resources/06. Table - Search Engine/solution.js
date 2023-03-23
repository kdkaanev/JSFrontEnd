function solve() {
   const input = document.getElementById('searchField')
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchWord = input.value
      const body = Array.from(document.querySelectorAll('tbody tr'))
      for (const row of body) {
         let trimRow = row.textContent.trim()
         if(row.classList.contains('select')){
            row.classList.remove('select')
         }
         if(trimRow.includes(searchWord)){
            row.classList.add('select')
         }
         
      }
      input.value = ''
      
      
   }
}
