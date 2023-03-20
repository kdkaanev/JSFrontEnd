function colorize() {
    function colorize() {
        let evenSity = Array.from(document.querySelectorAll('tr:nth-child(even)'))
        let btn = document.querySelector('button')
        for (const element of evenSity) {
            btn.addEventListener('click', colorized)
    
        function colorized(){
            element.style.backgroundColor = 'teal'
        }
        
        }
        
        
        
        
    }
    
}