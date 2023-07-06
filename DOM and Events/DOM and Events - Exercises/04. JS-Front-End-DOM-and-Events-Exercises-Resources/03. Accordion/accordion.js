function toggle() {
    
        const extraP = document.querySelector('#extra')
        const button = document.getElementsByClassName('button')[0]
        
        
    
       
            if(extraP.style.display === 'none' || extraP.style.display === ''){
                extraP.style.display = 'block'
                button.textContent = 'Less'
            }else{
                extraP.style.display = 'none'
                button.textContent = 'More'
            }
            
    
        
        
    
        
        
    
}
