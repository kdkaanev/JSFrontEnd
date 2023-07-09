function validate() {
    const email = document.getElementById('email');
    
    const regex = /^[a-z]+@[a-z]+\.[a-z]+$/;
    
    email.addEventListener('change', () => {
        if (regex.test(email.value)) {
            email.classList.remove('error');
        
        }else{
            email.classList.add('error')
        }
    }
    )
}

