function attachEvents() {
    
    const submitBtn = document.getElementById('submit')
    const BASE_URL = 'http://localhost:3030/jsonstore/forecaster/locations'
    let id = ''
    let alowedLocations = []
    
    fetch(BASE_URL)
        .then((res) => res.json())
        .then((data) =>{
            submitBtn.addEventListener('click', bthHandler)
            function bthHandler(){
                const enterLocation = document.getElementById('location').value
                data.forEach(element => {
                    console.log(element)
                    if(element.name === enterLocation){
                        id = element.code
                    }

                });
                fetch(`${BASE_URL}/today/${id}`)
                    .then((response) => response.json())
                    .then((todayForecast) =>{
                        console.log(todayForecast)
                    })
                
               
            }
        })
        
   
       
    

}

attachEvents();
