window.onload = function() {
  // Get references to elements on the page.
    var form = document.getElementById('latlong');
    var weather = document.getElementById('weather');
    var latitude = document.getElementById('latitude');
    var longitude = document.getElementById('longitude');
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    

    form.onsubmit = function(e) {
        e.preventDefault();
        var request = proxyUrl + 'https://api.darksky.net/forecast/1f9a5eedd4211ec9f965223be81f2020/' + latitude.value + ',' + longitude.value;
        fetch(request).then(response => {
           return response.json();
          }).then(data => {
            weather.value = JSON.stringify(data.currently, undefined, 4); 
          }).catch(err => {
            console.log("this did not work");
          });
    };     

    async function showToastMessage(message, timeInMs = 4000) {
        if (message) {
            var element = document.getElementById("toast");
            element.innerHTML = message;
            element.className = "show";
            await sleep(timeInMs);
            element.className = element.className.replace("show", "");
        };
    };
}

