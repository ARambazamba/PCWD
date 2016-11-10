// Interfaces
function interfacesBasics() {
    debugger;
    var Knight = (function () {
        function Knight() {
            this.weapon = "Battle Axe";
        }
        return Knight;
    }());
    var rob = new Knight;
    rob.name = "Rob Stark";
}
function interfacesNullability() {
    debugger;
    var DeliveryManager = (function () {
        function DeliveryManager() {
        }
        return DeliveryManager;
    }());
}
function interfacesObjectLiterals() {
    debugger;
    ;
    var position = { Long: 17.123123, Lat: 12.123123 };
    console.log("We are at position Long: " + position.Long + " Lat: " + position.Lat);
}
function interfacesFunctions() {
    debugger;
    function printLabel(labelledObj) {
        console.log(labelledObj.label);
    }
    var myObj = { size: 10, label: "Size 10 Object" };
    printLabel(myObj);
    var mySearch;
    mySearch = function (source, subString) { return false; };
    mySearch = function (source, subString) { return false; };
}
//# sourceMappingURL=interfaces.js.map