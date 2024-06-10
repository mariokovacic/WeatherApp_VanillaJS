"use strict"


const search = document.getElementById("search");
const searchButton = document.getElementById("searchButton")
const ApiKey = '32fec0123b5352dcd98d82a99ade66a2';
// --------------------------------------------------
const image = document.getElementById("image")
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");



searchButton.addEventListener("click", function () {

    let trazi = search.value;

    const url = `http://api.weatherapi.com/v1/current.json?key=b5fd9267f946405187633810240906&q=${trazi}&aqi=no`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data)
            image.src = data.current.condition.icon,
                cityName.textContent = data.location.name
            temperature.textContent = data.current.temp_c + "C"
        });

})






