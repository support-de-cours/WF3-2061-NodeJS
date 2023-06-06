const openStreetMapUrl = "https://nominatim.openstreetmap.org/reverse?lat={latitude}&lon={longitude}&format=json"; 

let openMeteoUrl = "https://api.open-meteo.com/v1/forecast?";
    openMeteoUrl+= "latitude={latitude}&";
    openMeteoUrl+= "longitude={longitude}&";
    openMeteoUrl+= "timezone=auto&";
    openMeteoUrl+= "daily=sunrise,sunset,uv_index_max,uv_index_clear_sky_max&";
    openMeteoUrl+= "hourly=temperature_2m,relativehumidity_2m,windspeed_10m,winddirection_10m,weathercode,visibility,is_day&";
    openMeteoUrl+= "current_weather=true";