var aVariable = 10;

function objectsAndLiterals() {
    debugger;

    //Creating Objects by Direct Assignments
    var aPerson = new Object();
    aPerson.theName = "Hugo";
    aPerson.sayName = function () {
        console.log("aPerson Name: " + aPerson.theName);
    };
    aPerson.sayName();

    //Object Literal
    var simplePerson = {}
    simplePerson.hisName = "Hans";
    console.log(simplePerson);

    var otherPerson = { Name: "Hans", Lastname: "Huber" };
    console.log(otherPerson);

    var myVoucher = {

        amount: 10,

        getDetails: function () {
            console.log("the details ...");
        },

        doPay: function () {
            console.log("paying voucher");
        }
    }

    myVoucher.doPay();
    console.log(myVoucher.amount);
}

function constructorFunctions() {
    debugger;

    function Cat(name, rasse) {
        this.name = name;
        this.breed = rasse;
    }

    var cat = new Cat('Minka', 'Perserkatze');
    console.log(cat.name + ' ist eine ' + cat.breed);
    cat.breed = 'Siamkatze';
    console.log(cat.name + ' ist neuerdings eine ' + cat.breed);
}

function aboutScope() {
    debugger;

    var x = 10;

    function math() {
        var pi = 3.14;
    }

    console.log(x);
    console.log(math.pi);
    
    var Person = function(name) {
        var Name = name; //not accessible from outside
        this.FirstName = name;
        this.sayName = function() {
            console.log(Name);
            console.log(this.Name);      //undefined 
            console.log(this.FirstName); 
        }
    }
    
    //FirstName, LastName acessible, Name not
    var hugo = new Person("hugo");
    hugo.sayName();
    console.log(hugo.FirstName);
    console.log(hugo.Name);
}

function thisInObjects() {
    debugger;

    var dog = {
        Name: "Giro",
        Breed: "Galgo Espanol",
        Run: function() {
            console.log("I am " + this.Name + " and I am running");
        }
    }

    dog.Bark = function() {
        console.log("I am " + this.Name + " and I am barking"); 
        console.log("I am " + Name + " and I am barking"); //Name is not defined
    }

    dog.Run();
    dog.Bark();
}

function paramPassing() {
    debugger;
    //How does the param that was passed behave?
    //How does the original variable behave?

    var nbr = 100;
    var name = "alex";

    function prependDash(el) {
        el = "#" + el;
        return el;
    }

    var modNbr = prependDash(nbr);
    var modName = prependDash(name);

    function addNbr(el) {
        return el += 1;
    }

    function addItem(el) {
        return el.Value += 1;
    }

    var item = { Name: "Item A", Value: 99 }

    var newItem = addItem(item);
    var newNbr = addNbr(nbr);
}
