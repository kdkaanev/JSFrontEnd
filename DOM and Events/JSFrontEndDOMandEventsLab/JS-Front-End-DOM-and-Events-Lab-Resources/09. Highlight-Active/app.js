function focused() {
    const inputElements = Array.from(document.querySelectorAll('input'));
    inputElements.forEach(input => {
        input.addEventListener('focus', onFocus);
        input.addEventListener('blur', onBlur);
    
    }
    )
    function onFocus(event) {
        event.target.parentNode.className = 'focused';
    
    }
    function onBlur(event) {
        event.target.parentNode.className = '';
    
    
    }
}
