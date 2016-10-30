
function basicVariables() {
    debugger;

    //Numbers
    var age: number;
    var weight: number = 83.12;
    var dogWeight = 25.4;
    var rand = Math.random();

    var numbers: number[] = [];
    numbers[0] = 1;
    //numbers.push("two"); // compile-time error

    var isCustomer: boolean = false;
    var finished = false;

    //strings
    var dogName: string = "Giro";
    var otherDogName = "Soi";
    var x = 10;

    var strings: Array<string> = [];
    strings.push("hello");
    //strings[1] = 1337; // compile time error
}

function useLetConst() {
    debugger;

    var index: number = 0;
    var array = ["a", "b", "c"];
    for (let index: number = 0; index < array.length; index++) {
        console.log("Inside for ..." + index);
        console.log("Inside for ..." + array[index]);
    }
    console.log(index); // 0
    const pi = 3.14;
    //pi = 2;
}

function useEnums() {
    debugger; 

    enum VoucherStatus {draft, complete, pending};

    var n: VoucherStatus;
    n = VoucherStatus.draft;
    n = VoucherStatus.complete;
    //n = VoucherStatus.unfinished; // compile-time error
    //n = "on the way"; // compile-time error
}

function introArrays() {
    debugger;
    //declaration using type followed by []
    var customers: string[] = ["Alex", "Giro", "Sonja", "Soi", "David"];
    //declaration using generic array type
    let nbrs: Array<number> = [3, 4, 5];

    console.log(customers.length + "Persons in Array");
    customers[2] = "Brunhilde";
    console.log("Person with index 1 is" + customers[1]);

    //destructuring
    let input = [1, 2];
    let [first, second] = input;

    //for ... of
    let list : number[] = [4, 5, 6];

    for (let i in list) {
        console.log(i); // "0", "1", "2", -> index
    }

    for (let i of list) {
        console.log(i); // "4", "5", "6"
    }
}

function useVoidAny() {
    debugger;

    function handleClick(): void {
        var g = "I don't return anything.";
        console.log(g);
    }

    //let nonsens: void = 10; //Conversion error
    let nonsens: void = undefined;

    let likeadelegate: void = handleClick();

    let notSure: any = 4;
    notSure = "maybe a string instead";
    notSure = false; // okay, definitely a boolean
}