function attachEvents() {
    document.querySelector("#submit")
    .addEventListener("click", getWeatherDataForLocation);
}

const weatherSymbols = {
    "Sunny": "☀",
    "Partly Sunny": "⛅",
    "Overcast" : "☁",
    "Rain": "☂"
} 

async function getWeatherDataForLocation(){
    const locationName = document.querySelector("#location").value;
    const locationResponse = await (
    await fetch("http://localhost:3030/jsonstore/forecaster/locations")
    ).json();
    // .catch(() =>{
    //     //displays eror in forcast section later
    // })

    const location = locationResponse
    .find((l) => l.name.toLowerCase() === locationName.toLowerCase());

    const currentConditionResponse = await (
    await fetch(`http://localhost:3030/jsonstore/forecaster/today/${location.code}`)
    ).json();

    const threeDayConditionResponse = await (
    await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${location.code}`)
    ).json();

    const forecastContainer = document.querySelector("#forecast");
    forecastContainer.style.display = "block";

    const currentWeatherContainer = document.createElement("div");
    currentWeatherContainer.classList.add("forecasts");

    const dataHolder = document.createElement("span");
    dataHolder.classList.add("condition");

    dataHolder.appendChild(createForecastDataElement(currentConditionResponse.name));

    dataHolder.appendChild(createForecastDataElement(`${currentConditionResponse.forecast.low}°/${currentConditionResponse.forecast.high}°`));

    dataHolder.appendChild(createForecastDataElement(weatherSymbols[currentConditionResponse.forecast.condition]));

    currentWeatherContainer.appendChild(createWeatherSymbolElement(weatherSymbols[currentConditionResponse.forecast.condition]))
    currentWeatherContainer.appendChild(dataHolder);

    document.querySelector("#current")
    .appendChild(currentWeatherContainer);
     
}

function createForecastDataElement(textContent){
    const forecastElement = document.createElement("span");
    forecastElement.textContent = weatherSymbols[currentConditionResponse.forecast.condition];
    forecastElement.classList.add("forecast-data");
    
    return forecastElement;
}

function createWeatherSymbolElement(textContent){
    const weatherSymbol = document.createElement("span");
    weatherSymbol.classList.add("condition", "symbol");
    weatherSymbol.textContent =
    weatherSymbols[currentConditionResponse.forecast.condition];

    return weatherSymbol;
}
attachEvents();