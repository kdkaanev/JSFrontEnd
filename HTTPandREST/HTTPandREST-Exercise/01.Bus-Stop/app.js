function getInfo() {
    const stopIdInput = document.getElementById('stopId')
    const stopId = stopIdInput.value 
    const stopName = document.getElementById('stopName')
    const buss = document.getElementById('buses')
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/businfo/'
    buss.innerHTML =''
    fetch(`${BASE_URL}${stopId}`)
        .then((res) => res.json())
        .then((busesInfo) =>{
           let {name, buses} = busesInfo
           stopName.textContent = name
           for (const busId in buses) {
            const li = document.createElement('li')
                li.textContent = `Bus ${busId} arrives in ${buses[busId]} minutes`
                buss.appendChild(li)
            }
           }        
            )

        .catch((err) =>{
            stopName.textContent = 'Error'
        })
        

    

        }
