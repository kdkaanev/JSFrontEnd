function getInfo() {
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/businfo/'
    const stopId = document.getElementById('stopId')
    const stopName = document.getElementById('stopName')
    const busesContainer = document.getElementById('buses')
    
    let stopIdValue = stopId.value
    busesContainer.innerHTML = ''
    fetch(`${BASE_URL}${stopIdValue}`)
        .then((res) => res.json())
        .then((busesInfo) => {
            const {buses, name} = busesInfo
            stopName.textContent = name
            for (const busId in buses) {
                const li = document.createElement('li')
                li.textContent = `Bus ${busId} arrives in ${buses[busId]} minutes`
                busesContainer.appendChild(li)
                    
                }
            }
            
        )
        .catch((err) =>{
            stopName.textContent = 'Error'
        })
    
}