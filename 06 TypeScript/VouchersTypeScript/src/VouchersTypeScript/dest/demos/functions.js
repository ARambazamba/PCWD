function typedFunctions() {
    debugger;
    //C# delegate ... variable that contains a function
    var addFunction = function (x, y) {
        return x + y;
    };
    var result = addFunction(10, 20);
    console.log(result);
}
function functionParameters() {
    debugger;
    //optional param
    function buildName(firstName, lastName) {
        if (lastName)
            return firstName + " " + lastName;
        else
            return firstName;
    }
    console.log(buildName("Bob"));
    console.log(buildName("Giro", "Galgohead"));
    //default param
    function getAddress(street, city) {
        if (city === void 0) { city = "Vienna"; }
        return street + ", " + city;
    }
    console.log(getAddress("Neuwaldegger Straße"));
    console.log(getAddress("Seestraße", "Idolsberg"));
    //rest param
    function buildFruitBucket(fruitType) {
        var fruits = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            fruits[_i - 1] = arguments[_i];
        }
        console.log("The following " + fruitType + " are in the bucket " + fruits.join(", "));
    }
    buildFruitBucket("Beeren", "Himbeeren", "Brombeeren", "Goji Beeren");
}
function arrowFunctions() {
    debugger;
    var rectangleFunction = function (width, height) {
        return width * height;
    };
    //Implemented as Lambda or "Arrow" Function
    var rectangleFunctionArrow = function (width, height) { return height * width; };
    var result = rectangleFunctionArrow(10, 22);
    console.log(result);
}
function functionOverloads() {
    debugger;
    var suits = ["hearts", "spades", "clubs", "diamonds"];
    function pickCard(x) {
        if (typeof x == "object") {
            var pickedCard = Math.floor(Math.random() * x.length);
            return pickedCard;
        }
        else if (typeof x == "number") {
            var pickedSuit = Math.floor(x / 13);
            return { suit: suits[pickedSuit], card: x % 13 };
        }
        else {
            return null;
        }
    }
    var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
    var pickedCard1 = myDeck[pickCard(myDeck)];
    console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);
    var pickedCard2 = pickCard(15);
    console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
}
