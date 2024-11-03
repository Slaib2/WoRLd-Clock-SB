//Cairo
 function updateTime() {
   let cairoElement = document.querySelector("#cairo");
   if (cairoElement) {
     let cairoDateElement = cairoElement.querySelector(".date");
     let cairoTimeElement = cairoElement.querySelector(".time");
     let cairoTime = moment().tz("Africa/Cairo");
     cairoDateElement.innerHTML = cairoTime.format("dddd MMMM Do YYYY");
     cairoTimeElement.innerHTML = cairoTime.format(
       "h:mm:ss [<small>]A[</small>]"
     );
   }

   //Berlin
   let berlinElement = document.querySelector("#berlin");
   if (berlinElement) {
     let berlinDateElement = berlinElement.querySelector(".date");
     let berlinTimeElement = berlinElement.querySelector(".time");
     let berlinTime = moment().tz("Europe/Berlin");
     berlinDateElement.innerHTML = berlinTime.format("dddd MMMM Do YYYY");
     berlinTimeElement.innerHTML = berlinTime.format(
       "h:mm:ss [<small>]A[</small>]"
     );
   }
 }

 function updateCity(event) {
   let cityTimeZone = event.target.value;
   let cityName = cityTimeZone.replace("_", "").split("/");
   let cityTime = moment().tz(cityTimeZone);

   let citiesElement = document.querySelector("#cities");
   citiesElement.innerHTML += `<div class="city"><div>
<h2>${cityName}</h2>
<div class="date">${cityTime.format("MMMM Do YY")}</div>
<div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
     "A"
   )}</small></div>
</div>
`;
 }
 updateTime();
 setInterval(updateTime, 1000);
 let citiesSelectElement = document.querySelector("#city");
 citiesSelectElement.addEventListener("change", updateCity);