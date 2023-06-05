"use strict";

const api_url = "https://nominatim.openstreetmap.org/reverse?lat={latitude}&lon={longitude}&format=json";

// Get HTML Elements
// --

const el_latitude = document.querySelector('#latitude');
const el_longitude = document.querySelector('#longitude');


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
    let url = api_url;
        url = url.replace("{latitude}", position.coords.latitude);
        url = url.replace("{longitude}", position.coords.longitude);

    
    
    console.log( url );
}
