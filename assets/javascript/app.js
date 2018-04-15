let queryURL = `https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyApLeLjAqhg5nXoDlvzxKzmdv78-Qqh3F8`;
let local = "";
let currentDate = new Date();
let formattedDate = currentDate.toISOString();
let dateSubString = formattedDate.substr(0, 19) + "Z";
// ajax request for users location 
function getLocation(callback) {
    $.ajax({
        url: queryURL,
        method: "POST",
        success: function (response) {
            let lattitude = response.location.lat;

            let longitude = response.location.lng;

            let latlon = (lattitude + "," + longitude);
            callback(latlon);

        },
        error: function (err) {
            console.log(err);
        }
    });
}

getLocation(function (data) {
    let url = `https://cors-anywhere.herokuapp.com/app.ticketmaster.com/discovery/v2/events.json?size=30&startDateTime=${dateSubString}&latlong=${data}&radius=30&unit=miles&apikey=nEMd0Ed2sNkvX2uizZwdCDIiuArIDwnT`;
    $.ajax({
        type: "GET",
        url: url,
        async: true,
        dataType: "json",
        success: function (json) {
            // console.log(json);
            let eventLocations = json._embedded.events;
            //    console.log(eventLocations);
            
            
            mapMarkerMaker(eventLocations,data);
        },
        error: function (xhr, status, err) {
            // This time, we do not end up here!
        }
    });
})

function mapMarkerMaker(eventLocations,data) {
    console.log(eventLocations);
    let locationCoordinates = eventLocations.map(function (location) {
        return location._embedded.venues[0].location;
    }).map(function(coordinate){
        return {
            lat:parseFloat(coordinate.latitude),
            lng:parseFloat(coordinate.longitude)
        }
    });
    data = data.split(",");
    
    let currentLocation = {
            lat:parseFloat(data[0]),
            lng:parseFloat(data[1])
    }
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        center: currentLocation
    });
    // Create an array of alphabetical characters used to label the markers.
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    
    var markers = locationCoordinates.map(function (location, i) {
        return new google.maps.Marker({
            position:location,
            label: labels[i % labels.length]
        });
    });

    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });






}