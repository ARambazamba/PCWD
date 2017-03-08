
module.exports = function (app) {
    app.factory('vouchersFactory',
        function() {
            return [
                { Text: 'Expensive', Amount: 77 },
                { Text: 'Cheap', Amount: 22 }
            ];
        });
}