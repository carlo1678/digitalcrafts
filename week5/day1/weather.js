const getWeatherData = async () => {
    let input = document.querySelector("#cityInput").value
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${input},us&appid=714e2f1a644d53aee22d57e720922fab&units=imperial`)
    const dataJson = await data.json()
    let grabLocation = document.querySelector("#location")
    grabLocation.innerHTML = (dataJson.name)
    const getTemp = document.querySelector("#currTemp")
    getTemp.innerHTML = `Current Temp: ${dataJson.main.temp}`
    const getFeelsLike = document.querySelector("#feelLike")
    getFeelsLike.innerHTML = `Feels Like: ${dataJson.main.feels_like}`
    const getHumidity = document.querySelector("#humidity")
    getHumidity.innerHTML = `Humidity is: ${dataJson.main.humidity}`
    const getMaxTemp = document.querySelector("#maximum")
    getMaxTemp.innerHTML = `Max Temp Today is: ${dataJson.main.temp_max}`
    const getMinTemp = document.querySelector("#minimum")
    getMinTemp.innerHTML = `Min Temp Today is: ${dataJson.main.temp_min}`
}

const grabButton = document.querySelector("#subButton")
grabButton.addEventListener("click", () => {
    getWeatherData()
})





    




