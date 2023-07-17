function search() {
   const towns = Array.from(document.getElementById('towns').children)
   const searchText = document.getElementById('searchText').value
   const result = document.getElementById('result')
   let matches = 0
   towns.forEach(element => {
      let name = element.textContent
      if(name.indexOf(searchText) >= 0){
         matches ++
         element.style.fontWeight = 'bold'
         element.style.textDecoration = 'underline'
            
      }
   })
   result.textContent = `${matches} matches found`
   
}
