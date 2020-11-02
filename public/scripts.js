
   if ('geolocation' in navigator) {
    console.log('geolocation available');
    navigator.geolocation.getCurrentPosition(position => {
        // giving credit - where credit is due 
        const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

        // the leaflet map
        const mymap = L.map('mymap').setView([0,0], 1);

        // css for maker
        const myissIcon = L.icon({
        iconUrl     : 'saucer.png',
        iconSize    : [45, 32],
        iconAnchor  : [22, 16]
        });

        // marker for map
        const marker = L.marker([0, 0], {icon: myissIcon}).addTo(mymap);

        const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'; 
        const tiles   = L.tileLayer(tileUrl, { attribution } );
        tiles.addTo(mymap);
        const locale = { latitude, longitude } = position.coords;
        document.getElementById('latitude').textContent = latitude;
        document.getElementById('longitude').textContent = longitude;
        marker.setLatLng([latitude,longitude]);
    });
} else {
    console.log('geolocation not available');
}