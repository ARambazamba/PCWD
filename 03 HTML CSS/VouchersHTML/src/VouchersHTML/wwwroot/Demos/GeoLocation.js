//# sourceURL=GeoLocation.js

function useGeoLocation () {
    var spnLocation = null;

    function getLocation() {
        spnLocation = document.getElementById("location");
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            spnLocation.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    function showPosition(position) {
        var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.coords.longitude + "&key=AIzaSyBgxlEjtBWN46ySm9TOYUWF5ZI56PP58UI";

        $.getJSON(url,
            null,
            function (data) {
                spnLocation.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude + "<br>" + data.results[0].formatted_address;

            });
    }

    getLocation();

}