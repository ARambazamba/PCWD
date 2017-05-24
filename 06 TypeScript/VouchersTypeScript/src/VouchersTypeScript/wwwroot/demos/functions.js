var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
function usingPromises() {
    function doAsyncTask(succeed) {
        var promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log("Async Work Complete");
                if (succeed) {
                    resolve("Promise resolved");
                }
                else {
                    reject("Promise rejected");
                }
            }, 1000);
        });
        return promise;
    }
    doAsyncTask(true).then(function (msg) {
        console.log(msg);
        console.log("Async Task complete");
    });
}
function usingFetchAwait() {
    function getAllVouchers() {
        return __awaiter(this, void 0, void 0, function () {
            var response, voucher;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("./demos/vouchers.json")];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        voucher = _a.sent();
                        console.log("Data received");
                        console.log(voucher);
                        return [2 /*return*/];
                }
            });
        });
    }
    getAllVouchers();
}
//# sourceMappingURL=functions.js.map