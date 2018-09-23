var data = [];
$(document).ready(function() {
  $.ajax({
    url: 'https://data.cityofchicago.org/resource/6zsd-86xi.json',
    type: 'GET',
    success: function(res) {
      res.map(e => {
        if (
          e &&
          e.hasOwnProperty('location') &&
          e.location.hasOwnProperty('coordinates')
        ) {
          if (
            e.primary_type == 'ASSAULT' ||
            e.primary_type == 'HOMICIDE' ||
            e.primary_type == 'BATTERY' ||
            e.primary_type == 'THEFT'
          ) {
            data.push({
              location: new google.maps.LatLng(
                e.location.coordinates[1],
                e.location.coordinates[0]
              ),
              weight: 3,
            });
          } else {
            data.push({
              location: new google.maps.LatLng(
                e.location.coordinates[1],
                e.location.coordinates[0]
              ),
              weight: 0.5,
            });
          }
        }
      });
    },
  });
});

var map;
var heatmap;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: { lat: 41.885311, lng: -87.6285 },
    mapTypeId: 'roadmap',
  });
  heatmap = new google.maps.visualization.HeatmapLayer({
    data: data,
    map: map,
  });
  var geocoder = new google.maps.Geocoder();

  document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
  });
}

function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
  var gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)',
  ];
  heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

function changeRadius() {
  heatmap.set('radius', heatmap.get('radius') ? null : 20);
}

function changeOpacity() {
  heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
}

function plotLocation() {
  //begin testing of plot location
  // Try HTML5 geolocation.
  infoWindow = new google.maps.InfoWindow();
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
      function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('You are here!');
        infoWindow.open(map);
        map.setCenter(pos);
      },
      function() {
        handleLocationError(true, infoWindow, map.getCenter());
      }
    );
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}
function setDestination() {
  //geocoding query
}

function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('address').value;
  geocoder.geocode({ address: address }, function(results, status) {
    if (status === 'OK') {
        var loc = results[0].geometry.location
        gcod = new google.maps.InfoWindow();
        gcod.setPosition(loc);
        gcod.setContent(results[0].formatted_address);
        gcod.open(map);
        map.setCenter(loc);
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

