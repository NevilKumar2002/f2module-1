// 
const locationInfo=document.getElementsByClassName("latitude-info")
const LATITUDE=document.getElementById("location-info");
const LONGITUDE=document.getElementById("location-info1");
function findLocation(){
    const status=document.getElementsByClassName("latitude-info");
   
    const sucess=(position)=>{
        const latitude=position.coords.latitude;
        const longitude=position.coords.longitude;
      LATITUDE.textContent=`Latitude  :${latitude}`;
      LONGITUDE.textContent=`Longitude :${longitude}`;
       const getLocationUrl=`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
       fetch(getLocationUrl)
       .then(res=>res.json())
       .then((data)=>{
         
       return ( data.city);

       })
    }
    const error=()=>{
        console.log("some error occured to fetch location");
    }
    navigator.geolocation.getCurrentPosition(sucess,error)
}
findLocation()

function initMap() {
        if ("geolocation" in navigator) {
            // Use Geolocation API to get the current location
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                   
                    var macc = {lat:latitude, lng:longitude};
        
                    var map = new google.maps.Map(
              
                        document.getElementById('map'), {zoom: 10, center: macc});
              
                    var marker = new google.maps.Marker({position: macc, map: map});
                    
    
        
                   
                }
            )};
    
    
      }
function  wind_direction(wind1)
{
 if(wind1===0 || wind1==360)
 {
    return `East`
 }
 if(wind1<90)
 {
    return `NorthEast`
 }
 if(wind1==0)
 {
    return `East`
 }
 if(wind1>90 && wind1<180)
 {
    return `SothEast`
 }
 if(wind1==180)
 {
    return `South`
 }
 if(wind1>180 && wind1<270)
 {
    return `SouthWest`
 }
 if(wind1==270)
 {
    return `West`
 }
 return `Northwest`
    }


function getweather(){



    
    let weatherUrl="https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=74e0b5d138651a7806f1447c32505376";
    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={74e0b5d138651a7806f1447c32505376}
 
   fetch(weatherUrl)
.then((res)=>res.json())
.then((data)=>{
    document.getElementById('location1').textContent="Location :"+`${data.name}`;
    document.getElementById('windspeed').textContent=`WindSpeed: ${data.wind.speed}`;
    document.getElementById('humidity').textContent=`Humidity: ${data.main.humidity}`;
    document.getElementById('timezone').textContent=`TimeZone: ${data.timezone}`;
    document.getElementById('pressure').textContent=`Pressure: ${data.main.pressure}`;
    document.getElementById('windDirection').textContent="Wind Direction : "+wind_direction(`${data.wind.deg}`)
    document.getElementById('FeelLike').textContent=`FeelLike: ${data.main.feels_like}`;
    document.getElementById("UVIndex").textContent=`UVIndex:  ${data.sys.type}`;
    console.log(data)
    const sucess=(position)=>{
        const getLocationUrl=`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
        fetch(getLocationUrl)
        .then(res=>res.json())
        .then(data=>{
         //vishakapatnam
         document.getElementById('location1').textContent="Location :"+`${data.city}`;
        })
    }
});
}

getweather()





// function fetchGeolocation() { 
//     if ("geolocation" in navigator) {
//      navigator.geolocation.getCurrentPosition(function(position) { 
//         const latitude = position.coords.latitude; 
//      const longitude = position.coords.longitude; 
//      // Display on map displayMap(latitude, longitude); // Fetch weather data 
//      fetchWeatherData(latitude, longitude); }); } 
//      else { alert("Geolocation is not supported in this browser."); } }
// function displayMap(latitude, longitude) { const mapDiv = document.getElementById("map"); const mapOptions = { center: { lat: latitude, lng: longitude }, zoom: 10, };
// const map = new google.maps.Map(mapDiv, mapOptions); // You'll need to include the Google Maps JavaScript API script in your HTML } 
// const latitudeElement = document.getElementById("latitude"); 
// const longitudeElement = document.getElementById("longitude"); 
// latitudeElement.addEventListener("input", updateLatitude); 
// longitudeElement.addEventListener("input", updateLongitude); 
// function updateLatitude() { const newLatitude = latitudeElement.textContent; console.log("Latitude:", newLatitude);
//      }}









// let a=fetch(weatherUrl)
// let b= a.json();
// // console.log(b);
// b.forEach((data)=>{
//     console.log(data);
// })


// var lat = "response.city.coord"("lat");
// var lon = "response.city.coord"("lon");

// var apiKey1 = "ada1f715672a438e9b9acaa7ea0e930b";
// var queryURL2 = `https://api.openweathermap.org/data/2.5/uvi?appid=${apiKey1}&lat=${lat}&lon=${lon}`;

// $.ajax({
//     url: queryURL2,
//     method: "GET",
// }).then(function (res) {
//     var uvI = res.value;
//     $(".uvIndex").text("UV Index: " + uvI);
// });


const sucess=(position)=>{
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;
    var apiKey1 = "ada1f715672a438e9b9acaa7ea0e930b";
var queryURL2 = `https://api.openweathermap.org/data/2.5/uvi?appid=${apiKey1}&lat=${lat}&lon=${lon}`;

let x=({
    url: queryURL2,
    method: "GET",
});x.then(function (res) {
    var uvI = res.value;
    // $(".uvIndex").text("UV Index: " + uvI);
    document.getElementById('UVIndex').innerHTML=uvI;
    console.log(uvI)
});

   
}
const error=()=>{
    console.log("some error occured to fetch location");
}
navigator.geolocation.getCurrentPosition(sucess,error)