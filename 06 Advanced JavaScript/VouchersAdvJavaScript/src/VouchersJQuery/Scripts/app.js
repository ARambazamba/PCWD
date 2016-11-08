window.onload = function() {
    loadPage('home.htm', null, null );
};

var currentVoucherID;

function loadPage(page, script, detailId) {
    console.clear();
    var url = "../pages/" + page;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("content").innerHTML = xmlhttp.responseText;
            script != null ? loadScript(script) : console.log("no script to load");
            detailId != null ? currentVoucherID = detailId : console.log("no detailID to store");            
        }
    }
    xmlhttp.open("GET", url, false);
    xmlhttp.send();    
}

function loadScript(path) {
    var sc = "../js/" + path;
    var script = document.createElement("script");
    script.src = sc;
    script.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(script);
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
