// set map location for singapore
var map = L.map('map').setView([1.3521,103.8198],13); 

// adding tiles layer on top of 'map' variable
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

document.querySelector("#firstRestaurant").addEventListener("click",function(){
    //1.3340120271677833, 103.69982225787454 lat long for soon lee 家乡小厨
    map.setView([1.3340, 103.6998], 16);

    var marker = L.marker([1.3340, 103.6998]).addTo(map);
    console.log("test");
})