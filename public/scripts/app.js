"use strict";

// Get HTML Elements
// --

const el_latitude = document.querySelector('#latitude');
const el_longitude = document.querySelector('#longitude');
const el_temperature = document.querySelector('#temperature');


// Start Geolocation
// --

// Check if Geolocation is available
if (navigator.geolocation) 
{
    navigator.geolocation.getCurrentPosition( refreshPosition );
    navigator.geolocation.watchPosition( refreshPosition );
}
else 
{
    alert("Geolocation is not supported by this browser.");
}


// Execute refreshPosition on geolocation change
// --

function refreshPosition(position)
{
    // Refresh Coords in the HTML
    el_latitude.innerText = position.coords.latitude;
    el_longitude.innerText = position.coords.longitude;

    // Rewrite the API url with lat & lon values
    let geolocation_url = openStreetMapUrl;
        geolocation_url = geolocation_url.replace("{latitude}", position.coords.latitude);
        geolocation_url = geolocation_url.replace("{longitude}", position.coords.longitude);
    
    let forecast_url = openMeteoUrl;
        forecast_url = forecast_url.replace("{latitude}", position.coords.latitude);
        forecast_url = forecast_url.replace("{longitude}", position.coords.longitude);


        fetch(forecast_url)
            .then(response => response.json())
            .then(data => {

                el_temperature.innerText = data.current_weather.temperature;
                console.log( data );
            })
    
}
