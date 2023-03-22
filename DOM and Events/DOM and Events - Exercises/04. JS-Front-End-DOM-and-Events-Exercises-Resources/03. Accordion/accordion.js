function toggle() {
    const button = document.getElementsByClassName('button')[0]
    const extra = document.getElementById('extra')
    button.addEventListener('click', changeStatus)

    function changeStatus(event){
        if ((extra.style.display === 'none' || extra.style.display === '')) {
            extra.style.display = 'block'
        }else{
            extra.style.display = 'none'
        }
        
    }
    console.log(button);
}