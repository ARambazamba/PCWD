// Interfaces

function interfacesBasics() {
    debugger;

    interface IHumanBeeing {
        name: string;
        birthDate: Date;
    }

    class Knight implements IHumanBeeing {
        name: string;
        birthDate: Date;
        weapon: string = "Battle Axe";
    }
    
    let rob: Knight = new Knight;
    rob.name = "Rob Stark";

}

function interfacesNullability() {
    debugger;

    interface IWorker {
        name: string;
        salary: number;
    }

     //does not implement interface - salary missing
    //class Accountant implements IWorker {
    //    name: string;
    //}

    interface IManager {
        name: string;
        salary?: number;
    }

    class DeliveryManager implements IManager {
        name: string;
    }

}

function interfacesObjectLiterals() {
    debugger;

    interface ILongLat { Long: number, Lat: number };
    var position: ILongLat = { Long: 17.123123, Lat: 12.123123 };
    console.log("We are at position Long: " + position.Long + " Lat: " + position.Lat);
}

function interfacesFunctions() {
    debugger;

    interface LabelledValue {
        label: string;
    }

    function printLabel(labelledObj: LabelledValue) {
        console.log(labelledObj.label);
    }

    let myObj = { size: 10, label: "Size 10 Object" };
    printLabel(myObj);

    //Function Interfaces

    interface SearchFunc { (source: string, subString: string): boolean; }
    var mySearch: SearchFunc;

    mySearch = function (source: string, subString: string) { return false; }

    mySearch = (source: string, subString: string) => false;
}
