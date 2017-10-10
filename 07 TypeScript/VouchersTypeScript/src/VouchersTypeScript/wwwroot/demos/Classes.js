var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function basicClasses() {
    debugger;
    var Voucher = (function () {
        function Voucher() {
        }
        return Voucher;
    }());
    var v = new Voucher();
    v.ID = 0;
    v.Text = "Demo Voucher";
    console.log("vouchertext is:" + v["Text"]);
    var vouchers = new Array();
    var vM = { ID: 1, Text: "Media Markt", Amount: 22, Date: new Date() };
    vouchers.push(vM);
    var vA = { ID: 2, Text: "Amazon", Amount: 44, Date: new Date() };
    vouchers.push(vA);
    for (var i = 0; i < vouchers.length; i++) {
        var v_1 = vouchers[i];
        console.log(v_1.Text);
    }
    for (var v_2 in vouchers) {
        if (vouchers.hasOwnProperty(v_2)) {
            console.log(v_2);
        }
    }
    //try changing: let v -> var v ... think why
    for (var _i = 0, vouchers_1 = vouchers; _i < vouchers_1.length; _i++) {
        var v_3 = vouchers_1[_i];
        console.log(v_3.Text);
    }
}
function classesConstructor() {
    debugger;
    var Person = (function () {
        function Person(Name, Alive) {
            this.name = Name;
            this.alive = Alive;
        }
        return Person;
    }());
    var jim = new Person("Jim", true);
    console.log(jim.name + " is alive: " + jim.alive);
    var Bill = (function () {
        function Bill(Text, Paid) {
            if (Text === void 0) { Text = ""; }
            if (Paid === void 0) { Paid = false; }
            this.Text = Text;
            this.Paid = Paid;
            this.text = Text;
            this.paid = Paid;
        }
        return Bill;
    }());
    var b1 = new Bill("Car Purchase");
    var b2 = new Bill("Rösti für Freundin", true);
    console.log("b1 with Text: " + b1.text + " was " + b1.paid);
    console.log("b2 with Text: " + b2.text + " was " + b2.paid);
    var Dog = (function () {
        function Dog(name, breed) {
            this.name = name;
            this.breed = breed;
        }
        Dog.prototype.barkName = function () {
            return "Wuff, my name is " + this.name + ", I am a " + this.breed;
        };
        Dog.prototype.sayName = function () {
            return "Wuff, my name is " + name; // + ", I am a " + breed;
        };
        return Dog;
    }());
    var dog = new Dog("Soi", "Whippet");
    console.log(dog.barkName());
    console.log(dog.sayName());
    console.log(dog.breed);
    var Smurf = (function () {
        function Smurf(name) {
            if (name.length < 1) {
                throw new Error("Empty name!");
            }
            this.name = name;
        }
        return Smurf;
    }());
    var smurf = new Smurf("Daniel");
    //smurf.name = "Dan"; // Error! 'name' is read-only.
}
function getSet() {
    debugger;
    var passcode = "secret passcode";
    var Citzien = (function () {
        function Citzien() {
        }
        Object.defineProperty(Citzien.prototype, "fullName", {
            get: function () {
                return this._fullName;
            },
            set: function (newName) {
                if (passcode == "secret passcode") {
                    this._fullName = newName;
                    console.log("name changed to " + newName);
                }
                else {
                    console.log("Error: Unauthorized update of employee!");
                }
            },
            enumerable: true,
            configurable: true
        });
        return Citzien;
    }());
    var employee = new Citzien();
    employee.fullName = "Bob Smith";
    if (employee.fullName) {
        console.log(employee.fullName);
    }
}
function inheritance() {
    debugger;
    var Dog = (function () {
        function Dog(theName) {
            this.speed = "with 40 km/h";
            this.name = theName;
        }
        Dog.prototype.move = function (meters) {
            console.log(this.name + " moved " + meters + "m. " + this.speed);
        };
        return Dog;
    }());
    var Sighthound = (function (_super) {
        __extends(Sighthound, _super);
        function Sighthound(name) {
            var _this = _super.call(this, name) || this;
            _this.speed = "with up to 110 km/h";
            return _this;
        }
        Sighthound.prototype.move = function (meters) {
            if (meters === void 0) { meters = 500; }
            console.log("Running ..." + meters + "m. " + this.speed);
            _super.prototype.move.call(this, meters);
        };
        return Sighthound;
    }(Dog));
    var dog = new Dog("Bello");
    dog.move(50);
    var hound = new Sighthound("Soi");
    hound.move();
    hound.move(1000);
    //Protected Properties
    var Person = (function () {
        function Person(name) {
            this.name = name;
        }
        return Person;
    }());
    var Employee = (function (_super) {
        __extends(Employee, _super);
        function Employee(name, department) {
            var _this = _super.call(this, name) || this;
            _this.department = department;
            return _this;
        }
        Employee.prototype.getElevatorPitch = function () {
            return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
        };
        return Employee;
    }(Person));
    var howard = new Employee("Howard", "Sales");
    console.log(howard.getElevatorPitch());
    //console.log(howard.name); // error
}
//Abstract Classes
var Department = (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log('Department name: ' + this.name);
    };
    return Department;
}());
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, 'Accounting and Auditing') || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log('The Accounting Department meets each Monday at 10am.');
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log('Generating accounting reports...');
    };
    return AccountingDepartment;
}(Department));
var department; // ok to create a reference to an abstract type
//department = new Department(); // error: cannot create an instance of an abstract class
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
//department.generateReports(); // error: method doesn't exist on declared abstract type
function staticProperties() {
    debugger;
    var Grid = (function () {
        function Grid(scale) {
            this.scale = scale;
        }
        Grid.prototype.calculateDistanceFromOrigin = function (point) {
            var xDist = (point.x - Grid.origin.x);
            var yDist = (point.y - Grid.origin.y);
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        };
        return Grid;
    }());
    Grid.origin = { x: 0, y: 0 };
    var grid = new Grid(3);
    var p = { x: 10, y: 20 };
    var result = grid.calculateDistanceFromOrigin(p);
    console.log("Grid result: " + result);
}
//# sourceMappingURL=Classes.js.map