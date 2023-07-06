function lockedProfile() {
    const btns = Array.from(document.getElementsByTagName('button'))
    
    btns
        .forEach((btn) => {
            btn.addEventListener('click', information)
        })

        function information(e){
            const button = e.currentTarget
            const currentProfile = button.parentElement
            let children = Array.from(currentProfile.children)
            let lockInput = children[4]
            const additionalInformationDiv = children[9]
            let input = document.get
            if(lockInput.checked){
                if(button.textContent === 'Show more'){
                    additionalInformationDiv.style.display = 'block'
                    button.textContent = 'Hide it'
    
                }else{
                    additionalInformationDiv.style.display = 'none'
                    button.textContent = 'Show more'
                }
            }
          

        }
   
}
