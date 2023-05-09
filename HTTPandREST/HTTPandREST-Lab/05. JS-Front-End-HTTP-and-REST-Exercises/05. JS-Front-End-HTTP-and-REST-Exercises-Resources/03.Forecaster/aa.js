function attachEvents() {
  const BASE_URL = "http://localhost:3030/jsonstore/forecaster/";

  const location = document.getElementById('location')
  const forecast = document.getElementById('forecast')
  let button = document.getElementById('submit')
  let weatherSymbol = {
    Sunny: '&#x2600', // ☀
    Partlysunny: '&#x26C5', // ⛅
    Overcast: '&#x2601',		 // ☁
    Rain: '&#x2614',	 // ☂
    Degrees: '&#176'   // °

  }



  button.addEventListener("click", collectInfoHandler);

  async function collectInfoHandler() {
    try {
      const response = await fetch(`${BASE_URL}locations`)
      const locationData = await response.json()
      let locationDataValue = Object.values(locationData)
      forecast.style.display = 'block'
      for (const { code, name } of locationDataValue) {
        let locationValue = location.value
        if (locationValue === name) {
          fetch(`${BASE_URL}today/${code}`)
            .then((res) => res.json())
            .then((data) => {
              const current = document.getElementById('current')
              const conditionSimdol = document.createElement('span')
              const divForecast = document.createElement('div')
              divForecast.classList.add('forecast')
              current.appendChild(divForecast)
              conditionSimdol.innerHTML = '&#x2600'
              divForecast.appendChild(conditionSimdol)

            })
            //  .catch((err) => {
            //    forecast.innerText = 'Error'
            //  })
        }
      }




    } catch (error) {

    }
  }
}

attachEvents();
