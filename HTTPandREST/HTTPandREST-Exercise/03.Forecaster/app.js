function attachEvents() {
    let weaterSimbol = {
        'Sunny' :'&#x2600',
        'Partly sunny':'&#x26C5',
        'Overcast' :'&#x2601',		
        'Rain':'&#x2614',
        'Degrees':'&#176',

    }
    
    const submitBtn = document.getElementById('submit')
    const BASE_URL = 'http://localhost:3030/jsonstore/forecaster/'
    let id = ''
    let alowedLocations = []
    
    fetch(`${BASE_URL}/locations`)
        .then((res) => res.json())
        .then((data) =>{
            submitBtn.addEventListener('click', bthHandler)
            function bthHandler(){
                const enterLocation = document.getElementById('location').value
                const forecastDiv = document.getElementById('forecast')
                forecastDiv.style.display = 'block'
                data.forEach(element => {
                    if(element.name === enterLocation){
                        id = element.code
                    }

                });
                fetch(`${BASE_URL}/today/${id}`)
                    .then((response) => response.json())
                    .then((todayForecast) =>{
                       
                    })
                    
                
               
            }
        })
        
   
       
    

}

attachEvents();
