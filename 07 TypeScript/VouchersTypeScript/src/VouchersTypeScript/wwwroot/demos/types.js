function basicVariables() {
    debugger;
    //Numbers
    var age;
    var weight = 83.12;
    var dogWeight = 25.4;
    var rand = Math.random();
    var numbers = [];
    numbers[0] = 1;
    //numbers.push("two"); // compile-time error
    var isCustomer = false;
    var finished = false;
    //strings
    var dogName = "Giro";
    var otherDogName = "Soi";
    var x = 10;
    var strings = [];
    strings.push("hello");
    //strings[1] = 1337; // compile time error
}
function useLetConst() {
    debugger;
    var index = 0;
    var array = ["a", "b", "c"];
    for (var index_1 = 0; index_1 < array.length; index_1++) {
        console.log("Inside for ..." + index_1);
        console.log("Inside for ..." + array[index_1]);
    }
    console.log(index); // 0
    var pi = 3.14;
    //pi = 2;
}
function useEnums() {
    debugger;
    var VoucherStatus;
    (function (VoucherStatus) {
        VoucherStatus[VoucherStatus["draft"] = 0] = "draft";
        VoucherStatus[VoucherStatus["complete"] = 1] = "complete";
        VoucherStatus[VoucherStatus["pending"] = 2] = "pending";
    })(VoucherStatus || (VoucherStatus = {}));
    ;
    var n;
    n = VoucherStatus.draft;
    n = VoucherStatus.complete;
    //n = VoucherStatus.unfinished; // compile-time error
    //n = "on the way"; // compile-time error
}
function introArrays() {
    debugger;
    //declaration using type followed by []
    var customers = ["Alex", "Giro", "Sonja", "Soi", "David"];
    //declaration using generic array type
    var nbrs = [3, 4, 5];
    console.log(customers.length + "Persons in Array");
    customers[2] = "Brunhilde";
    console.log("Person with index 1 is" + customers[1]);
    //destructuring
    var input = [1, 2];
    var first = input[0], second = input[1];
    //for ... of
    var list = [4, 5, 6];
    for (var i in list) {
        console.log(i); // "0", "1", "2", -> index
    }
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var i = list_1[_i];
        console.log(i); // "4", "5", "6"
    }
}
function useVoidAny() {
    debugger;
    function handleClick() {
        var g = "I don't return anything.";
        console.log(g);
    }
    //let nonsens: void = 10; //Conversion error
    var nonsens = undefined;
    var likeadelegate = handleClick();
    var notSure = 4;
    notSure = "maybe a string instead";
    notSure = false; // okay, definitely a boolean
}
//# sourceMappingURL=types.js.map