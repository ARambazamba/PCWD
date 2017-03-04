
function basicClasses() {
    debugger;

    class Voucher {
        ID: number;
        Text: string;
        Amount: number;
        Date: Date;
    }

    let v: Voucher = new Voucher();
    v.ID = 0;
    v.Text = "Demo Voucher";

    var vouchers = new Array<Voucher>();
    var vM: Voucher = { ID: 1, Text: "Media Markt", Amount: 22, Date: new Date() };
    vouchers.push(vM);
    var vA: Voucher = { ID: 2, Text: "Amazon", Amount: 44, Date: new Date() };
    vouchers.push(vA);

    for (var i = 0; i < vouchers.length; i++) {
        let v = vouchers[i];
        console.log(v.Text);
    }

    for (let v in vouchers) {
        if (vouchers.hasOwnProperty(v)) {
            console.log(v);
        }
    }

    //try changing: let v -> var v ... think why

    for (let v of vouchers) {
        console.log(v.Text);
    }
}

function classesConstructor() {
    debugger;

    class Person {
        name: string;
        alive: boolean;

        constructor(Name: string, Alive: boolean) {
            this.name = Name;
            this.alive = Alive;
        }
    }

    let jim = new Person("Jim", true);
    console.log(jim.name + " is alive: " + jim.alive);
    
    class Bill {
        text: string;
        paid: boolean;

        constructor(public Text: string = "", public Paid: boolean = false) {
            this.text = Text;
            this.paid = Paid;
        }
    }

    var b1: Bill = new Bill("Car Purchase");
    var b2: Bill = new Bill("Rösti für Freundin", true);

    console.log("b1 with Text: " + b1.text + " was " + b1.paid);
    console.log("b2 with Text: " + b2.text + " was " + b2.paid);

    class Dog {
        constructor(private name: string, public breed: string) {
        }
        barkName() {
            return "Wuff, my name is " + this.name + ", I am a " + this.breed;
        }
        sayName() {
            return "Wuff, my name is " + name; // + ", I am a " + breed;
        }
    }

    let dog = new Dog("Soi", "Whippet");
    console.log(dog.barkName());
    console.log(dog.sayName());
    console.log(dog.breed);

    class DateHour {

        private date: Date;
        private relativeHour: number;

        constructor(year: number, month: number, day: number, relativeHour: number);
        constructor(date: Date, relativeHour: number);
        constructor(dateOrYear: any, monthOrRelativeHour: number, day?: number, relativeHour?: number) {
            if (typeof dateOrYear === "number") {
                this.date = new Date(dateOrYear, monthOrRelativeHour, day);
                this.relativeHour = relativeHour;
            } else {
                var date = <Date>dateOrYear;
                this.date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
                this.relativeHour = monthOrRelativeHour;
            }
        }
    }

    var dh = new DateHour(new Date(), 2);

    class Smurf {
        readonly name: string;

        constructor(name: string) {
            if (name.length < 1) {
                throw new Error("Empty name!");
            }

            this.name = name;
        }
    }


    var smurf = new Smurf("Daniel");
    //smurf.name = "Dan"; // Error! 'name' is read-only.
}

function getSet() {
    debugger;

    let passcode = "secret passcode";

    class Citzien {
        private _fullName: string;

        get fullName(): string {
            return this._fullName;
        }

        set fullName(newName: string) {
            if (passcode == "secret passcode") {
                this._fullName = newName;
                console.log("name changed to " + newName);
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        }
    }

    let employee = new Citzien();
    employee.fullName = "Bob Smith";
    if (employee.fullName) {
        console.log(employee.fullName);
    }
}

function inheritance() {
    debugger;

    class Dog {
        private name: string;
        public speed: string = "with 40 km/h";
        constructor(theName: string) { this.name = theName; }
        move(meters: number) {
            console.log(this.name + " moved " + meters + "m. " + this.speed);
        }
    }

    class Sighthound extends Dog {
        constructor(name: string) { super(name); }
        public speed: string = "with up to 110 km/h";
        move(meters = 500) {
            console.log("Running ..." + meters + "m. " + this.speed);
            super.move(meters);
        }
    }

    var dog = new Dog("Bello");
    dog.move(50);
    var hound = new Sighthound("Soi");
    hound.move();
    hound.move(1000);

    //Protected Properties

    class Person {
        protected name: string;
        constructor(name: string) { this.name = name; }
    }

    class Employee extends Person {
        private department: string;

        constructor(name: string, department: string) {
            super(name); //base c#
            this.department = department;
        }

        public getElevatorPitch() {
            return `Hello, my name is ${this.name} and I work in ${this.department}.`;
        }
    }

    let howard = new Employee("Howard", "Sales");
    console.log(howard.getElevatorPitch());
    //console.log(howard.name); // error
    
}

debugger;

//Abstract Classes
abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log('Department name: ' + this.name);
    }

    abstract printMeeting(): void; // must be implemented in derived classes
}

class AccountingDepartment extends Department {

    constructor() {
        super('Accounting and Auditing'); // constructors in derived classes must call super()
    }

    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }

    generateReports(): void {
        console.log('Generating accounting reports...');
    }
}

let department: Department; // ok to create a reference to an abstract type
//department = new Department(); // error: cannot create an instance of an abstract class
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
//department.generateReports(); // error: method doesn't exist on declared abstract type


function staticProperties() {
    debugger;

    interface ICoordinate {
        x: number;
        y: number;
    }

    class Grid {
        static origin: ICoordinate = { x: 0, y: 0 };
        calculateDistanceFromOrigin(point: { x: number; y: number; }) {
            var xDist = (point.x - Grid.origin.x);
            var yDist = (point.y - Grid.origin.y);
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        }
        constructor(public scale: number) { }
    }

    var grid = new Grid(3);
    var p : ICoordinate = { x: 10, y: 20 };
    var result = grid.calculateDistanceFromOrigin(p);
    console.log("Grid result: " + result);
}