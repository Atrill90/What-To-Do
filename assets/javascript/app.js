let queryURL = `https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyApLeLjAqhg5nXoDlvzxKzmdv78-Qqh3F8`;


    $.ajax({
            url: queryURL,
            method: "POST"
        })
        // After data comes back from the request
        .then(function (response){
            console.log(response);
            const lattitude = response.location.lat;
            console.log(lattitude);
            const longitude = response.location.lng;
            console.log(longitude);
        });
   