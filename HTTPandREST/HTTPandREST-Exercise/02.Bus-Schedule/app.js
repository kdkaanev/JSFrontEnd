function solve() {
    const info = document.querySelector('#info > span')
    const departBtn = document.getElementById('depart')
    const arriveBtn = document.getElementById('arrive')
    const BASE_URL ='http://localhost:3030/jsonstore/bus/schedule/'
    let id = 'depot'
    function depart() {
        departBtn.addEventListener('click', departHandler())

        function departHandler(){
            fetch(`${BASE_URL}${id}`)
                .then((res) => res.json())
                .then((data) => {
                    info.textContent = data.name
                    id = data.next
                    departBtn.setAttribute('disabled',true)
                    arriveBtn.removeAttribute('disabled')
                    console.log(data)
                })
                .catch((err) => {
                    info.textContent = 'Error'
                    departBtn.setAttribute('disabled',true)
                    arriveBtn.setAttribute('disabled',true)
                   
                })
        }
    }

    async function arrive() {
        const response = await fetch(`${BASE_URL}{id}`)
        const dataArrive = await response.json()
        console.log(dataArrive)
        arriveBtn.setAttribute('disabled',true)
        departBtn.removeAttribute('disabled')

    }

    return {
        depart,
        arrive
    };
}

let result = solve();
