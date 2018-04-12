let queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?size=1&latlong=&apikey=nEMd0Ed2sNkvX2uizZwdCDIiuArIDwnT";

$.ajax({
    type:"GET",
    url: queryURl,
    async:true,
    dataType: "json",
    success: function(json) {
                console.log(json);
                // Parse the response.
                // Do other things.
             },
    error: function(xhr, status, err) {
                // This time, we do not end up here!
             }
  });