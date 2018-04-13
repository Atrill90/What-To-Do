let queryURL = `https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyApLeLjAqhg5nXoDlvzxKzmdv78-Qqh3F8`;
var local = "";

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

getLocation(function(data){
    $.ajax({
        type: "GET",
        url: "https://cors-anywhere.herokuapp.com/app.ticketmaster.com/discovery/v2/events.json?size=10&latlong="+data+"&radius=30&unit=miles&apikey=nEMd0Ed2sNkvX2uizZwdCDIiuArIDwnT",
        async: true,
        dataType: "json",
        success: function (json) {
            console.log(json);
            // Parse the response.
            // Do other things.
        },
        error: function (xhr, status, err) {
            // This time, we do not end up here!
        }
    });
})





