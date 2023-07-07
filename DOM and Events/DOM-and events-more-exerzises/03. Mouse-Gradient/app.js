function attachGradientEvents() {
    const result = document.getElementById('result')
    const target = document.getElementById('gradient')
    target.addEventListener('mousemove', hoovrHandler)

    function hoovrHandler(e){
        let xTarget = e.offsetX 
        let width = target.offsetWidth
        let x = Math.floor((xTarget / width) * 100)
        result.textContent = x + '%'
    }
}
