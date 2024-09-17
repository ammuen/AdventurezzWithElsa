// Initialize the map and set its view to the desired geographical coordinates and zoom level
var map = L.map('mapid').setView([51.505, -0.09], 13);

// Add a tile layer to the map (the background map layer)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add multiple markers with custom popups
var locations = [
    { lat: 35.6762, lng: 139.6503, message: "Tokyo, Japan" },
    { lat: -8.3405, lng: 115.0919, message: "Bali, Indonesia" },
    { lat: 40.7128, lng: -74.0060, message: "New York City, USA" },
    { lat: 48.8566, lng: 2.3522, message: "Paris, France" },
    { lat: -22.9068, lng: -43.1729, message: "Rio de Janeiro, Brazil (Carnival)" },
    { lat: 45.4408, lng: 12.3155, message: "Venice, Italy" },
    { lat: 51.5074, lng: -0.1278, message: "London, UK" },
    { lat: -33.8688, lng: 151.2093, message: "Sydney, Australia" },
    { lat: 25.276987, lng: 55.296249, message: "Dubai, UAE" }
];

locations.forEach(function(location) {
    L.marker([location.lat, location.lng]).addTo(map)
        .bindPopup(location.message)
        .openPopup();
});

// Add a click event listener to the map
map.on('click', function(e) {
    alert("You clicked the map at " + e.latlng.toString());
});
