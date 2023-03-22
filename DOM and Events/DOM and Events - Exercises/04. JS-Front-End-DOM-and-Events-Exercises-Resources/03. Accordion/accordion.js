function toggle() {
    const extraP = document.querySelector('#extra')
    const button = document.getElementsByClassName('button')[0]
    
    button.addEventListener('click', action)

    function action(event){
        if(extraP.style.display === 'none' || extraP.style.display === ''){
            extraP.style.display = 'block'
            button.textContent = 'LESS'
        }else{
            extraP.style.display = 'none'
            button.textContent = 'MORE'
        }
        

    }
    

    
    
}
