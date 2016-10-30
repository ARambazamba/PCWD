debugger;

//Immediately-Invoked Function Expression (IIFE)

var someVar = "I am some var";

(function () {

    var intlName = "Demo IIFE";
    var clickNumber = 0;
    var outputEl;

    function buttonClicked() {
        clickNumber++;
        outputEl.html('Button was clicked ' + clickNumber);
    }

    function init() {
        console.log(intlName);
        outputEl = $('#output');
        $('#button').click(buttonClicked);
    }

    debugger;
    $(document).ready(init);

})();

debugger;
//Search the global Namespace for  someVar, intlName

debugger;
(function () {

    var Person = {

        init: function () {
            this.form = $('#form');
            this.bindEvents();
        },

        bindEvents: function () {
            this.form.on('submit', this.showName);
        },

        showName: function (event) {
            event.preventDefault();
            alert(this.form.find('input[type=text]').val());
        }
    }

    debugger;
    Person.init();

})();

//Revealing Module Pattern - Encapsulation with public interface

var moduleA = (function () {

    var privateString = "privat string";

    otherString = "public string";

    function privateFunction() {
        console.log("private function was called\n" + "private variable: " + privateString);
    }

    return {
        publicMethod: function () {
            console.log("public function was called\n" + "private variable: " + privateString);
            privateFunction();
        }
    };

})();

debugger;
console.log(moduleA.privatString);  //undefined
console.log(moduleA.otherString);   //undefined - access only through public interface

var moduleB = (function () {

    var privateString = "privat";

    function privateFunction() {
        console.log("private function was called\n" + "private variable: " + privateString);
    }

    return {
        publicMethod: function () {
            console.log("public function was called\n" + "private variable: " + privateString);
            privateFunction();
        }
    };

})();

debugger;
moduleA.publicMethod();
moduleB.publicMethod();
console.log("Modul.privateFunktion von außerhalb: " + moduleB.privateFunction);


//Namespaces

var myNamespace = {};
myNamespace.Modul1 = (function () { console.log("Modul1"); })();
myNamespace.Modul2 = (function () { console.log("Modul2"); })();

//Extensible Modules

/* Basic Module */
var Modul = (function () {
    /* ... private objects ... */
    return {
        methode1: function() {
            console.log("methode 1 from module");
        }
    };
})();

/* extending the basic module */
(function (modul) {
    /* ... private objects ... */
    /* extending the base module */
    modul.methode2 = function () { console.log("methode 2 from module"); };
})(Modul);

debugger;
Modul.methode1();
Modul.methode2();