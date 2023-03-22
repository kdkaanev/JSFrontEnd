
    function toggle() {
        const extraP = document.querySelector('#extra')
        const button = document.getElementsByClassName('button')[0]
        
        button.addEventListener('click', action)
    
        function action(event){
            let btn = event.currentTarget
            if(btn.textContent === 'MORE'){
                extraP.style.display = 'block'
                btn.textContent = 'LESS'
            }else{
                extraP.style.display = 'none'
                btn.textContent = 'MORE'
            }
            
    
        }
        
    
        
        
    }

