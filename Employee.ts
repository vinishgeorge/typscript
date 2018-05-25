import {Address} from './IAddress';

class Employee {

    constructor(protected _fName?: string, protected _lName?: string, protected _mName?: string, protected _desig?: string, protected _exp?: number, protected _age?: number, protected _sal?: number) {

        this._fName = _fName;
        this._mName = _mName;
        this._lName = _lName;
        this._desig = _desig;
        this._sal = _sal;
        this._age = _age;
        this._exp = _exp;

    }

    set firstName(firstName) {
        this._fName = firstName;
    }

    get firstName() {
        return this._fName;
    }

    getEmployeeDetails() {
        return "First Name: " + this._fName+
        "Middle Name: " + this._mName+
        "Last Name: " + this._lName+
        "Designation: " + this._desig+
        "Salary: " + this._sal+
        "Age : " + this._age+
        "Experience:" + this._exp;

    }

    setEmployeeDetails(fName?: string, lName?: string, mName?: string, desig?: string, exp?: number, age?: number, sal?: number) {

        this._fName = fName;
        this._mName = mName;
        this._lName = lName;
        this._desig = desig;
        this._sal = sal;
        this._age = age;
        this._exp = exp;

    }

}

// var e = new Employee("Vinish","George","M","SSE",10,32,1);
// e.getEmployeeDetails();
// e.firstName="Soms";
// console.log("Fist name using property: "+e.firstName);
// e.getEmployeeDetails();
// e.setEmployeeDetails("Soms","John");
// e.getEmployeeDetails();

class Manager extends Employee implements Address {

    constructor(protected _fName?: string, protected _lName?: string,
        protected _mName?: string, protected _desig?: string,
        protected _exp?: number, protected _age?: number,
        protected _sal?: number, private responsibility?: string,
        public street?: string,public city?: string,public   country?: string,public  isLocal?: boolean) {
        super(_fName, _lName, _mName, _desig, _exp, _age, _sal);
        this.responsibility = responsibility;
        this.street=street;
        this.city=city;
        this.country=country;
        this.isLocal=isLocal;
    }

    getAddress(){
        if(this.isLocal){
            return "Address:"+this.street+" "+this.city+" "+this.country;
        }else{
            return "Address cannot be accessed";
        }
    }

    setAddress( street?: string, city?: string,   country?: string,  isLocal?: boolean){
        this.street=street;
        this.city=city;
        this.country=country;
        this.isLocal=isLocal;
    }
}



