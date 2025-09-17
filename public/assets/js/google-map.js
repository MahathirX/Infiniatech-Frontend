// Make sure this function is globally available
window.initMap = function () {
  // Gulshan Plaza, Dhaka (approx coordinates)
  var gulshanPlaza = {
    lat: 23.7925,   // Latitude
    lng: 90.4078    // Longitude
  };

  // The map, centered at Gulshan Plaza
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: gulshanPlaza,
    styles: [
      {
        "elementType": "geometry",
        "stylers": [{ "color": "#f5f5f5" }]
      },
      {
        "elementType": "labels.icon",
        "stylers": [{ "visibility": "off" }]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [{ "color": "#616161" }]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [{ "color": "#f5f5f5" }]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{ "color": "#ffffff" }]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{ "color": "#c9c9c9" }]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{ "color": "#9e9e9e" }]
      }
    ]
  });

  // The marker, positioned at Gulshan Plaza
  new google.maps.Marker({
    position: gulshanPlaza,
    map: map,
    title: "Gulshan Plaza, Dhaka"
  });
};
