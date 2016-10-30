self.addEventListener('message', function (e) {
    var data = e.data;

    self.postMessage('I will get info for: ' + data);
    self.postMessage('Pls wait a second');

    //mocking a long running query to some external data system + pass the answer back to caller
    setTimeout(function() {
        self.postMessage('Sorry no info found for: ' + data);
    }, 2000);

}, false);