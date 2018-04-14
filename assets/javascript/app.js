let queryURL = `https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyApLeLjAqhg5nXoDlvzxKzmdv78-Qqh3F8`;
let local = "";
let currentDate = new Date();
let formattedDate = currentDate.toISOString();
let dateSubString = formattedDate.substr(0,19) +"Z";
console.log(dateSubString);


// let currentYear = currentDate.getFullYear();
// let getMonth = currentDate.getMonth() + 1;
// let getDay = currentDate.getDate();
// // let formattedDate = `${currentYear}-0${getMonth}-${getDay}`;
// let readableDate= currentDate.toDateString();
// console.log(readableDate);



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
            console.log(latlon);
        },
        error: function (err) {
            console.log(err);
        }
    });
}

getLocation(function(data){
 let url = `https://cors-anywhere.herokuapp.com/app.ticketmaster.com/discovery/v2/events.json?size=10&startDateTime=${dateSubString}&latlong=${data}&radius=30&unit=miles&apikey=nEMd0Ed2sNkvX2uizZwdCDIiuArIDwnT`;
    console.log(url);
    $.ajax({
        type: "GET",
        url: url,
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





