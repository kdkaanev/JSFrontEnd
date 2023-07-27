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
   
    
    fetch(`${BASE_URL}/locations`)
        .then((res) => res.json())
        .then((data) =>{
            submitBtn.addEventListener('click', bthHandler)
            
            function bthHandler(){
                const enterLocation = document.getElementById('location').value
                const forecastDiv = document.getElementById('forecast')

                forecastDiv.style.display = 'block'
                let divCurrent = document.getElementById('current')
                let divUpcoming = document.getElementById('upcoming')
                
                submitBtn.disabled = true
                
                data.forEach(element => {
                    if(element.name === enterLocation){
                        id = element.code
                    }

                });
                
                fetch(`${BASE_URL}/today/${id}`)
                  .then((response) => response.json())
                  .then((todayForecast) => {
                  
                    let divForecasts = document.createElement("div");
                   
                    divForecasts.classList.add("forecasts");
                   
                    divCurrent.appendChild(divForecasts);
                    let spanSimbol = document.createElement("span");
                    spanSimbol.classList.add("condition", "symbol");
                    divForecasts.appendChild(spanSimbol);
                    spanSimbol.innerHTML =
                      weaterSimbol[todayForecast.forecast.condition];

                    let spanCondition = document.createElement("span");
                    spanCondition.classList.add("condition");
                    divForecasts.appendChild(spanCondition);
                    let spanCity = document.createElement("span");
                    spanCity.classList.add("forecast-data");
                    spanCity.innerHTML = todayForecast.name;
                    spanCondition.appendChild(spanCity);
                    let spanDegrees = document.createElement("span");
                    spanDegrees.classList.add("forecast-data");
                    spanDegrees.innerHTML = `${todayForecast.forecast.low}${weaterSimbol.Degrees}/${todayForecast.forecast.high}${weaterSimbol.Degrees}`;
                    spanCondition.appendChild(spanDegrees);
                    
                  })
                  .catch((err) =>{
                    forecastDiv.style.display = 'block'
                    forecastDiv.innerHTML = 'Error'
                });
                  
                  fetch(`${BASE_URL}/upcoming/${id}`)
                  .then((response) => response.json())
                  .then((upcomingForecast) => {
                    let divForecastsInfo = document.createElement("div");
                    divForecastsInfo.classList.add("forecast-info");
                    divUpcoming.appendChild(divForecastsInfo);
                    let spanUpcoming = document.createElement("span");
                    spanUpcoming.classList.add("upcoming");
                    divForecastsInfo.appendChild(spanUpcoming);
                    let lenght = upcomingForecast.forecast.length;
                    for (let i = 0; i < lenght; i++) {
                     
                      let upcomingSymbol = document.createElement("span");
                      upcomingSymbol.classList.add("symbol");
                      spanUpcoming.appendChild(upcomingSymbol);
                      upcomingSymbol.innerHTML = weaterSimbol[upcomingForecast.forecast[i].condition]

                      let upcomingDegrees = document.createElement("span"); 
                      upcomingDegrees.classList.add("forecast-data");
                      upcomingDegrees.innerHTML = `${upcomingForecast.forecast[i].low}${weaterSimbol.Degrees}/${upcomingForecast.forecast[i].high}${weaterSimbol.Degrees}`;
                      spanUpcoming.appendChild(upcomingDegrees);
                    }
                  }
                      
        
                      
                     
                    
                  
                    

                    
                  
                    
                  )
                  .catch((err) =>{
                    forecastDiv.style.display = 'block'
                    forecastDiv.innerHTML = 'Error'
                });
                  
            }
            
        }
        
        )
        .catch((err) =>{
            forecastDiv.style.display = 'block'
            forecastDiv.innerHTML = 'Error'
        })
    }


        
   
       
    


    
attachEvents();
