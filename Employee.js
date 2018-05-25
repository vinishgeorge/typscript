"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = (function () {
    function Employee(_fName, _lName, _mName, _desig, _exp, _age, _sal) {
        this._fName = _fName;
        this._lName = _lName;
        this._mName = _mName;
        this._desig = _desig;
        this._exp = _exp;
        this._age = _age;
        this._sal = _sal;
        this._fName = _fName;
        this._mName = _mName;
        this._lName = _lName;
        this._desig = _desig;
        this._sal = _sal;
        this._age = _age;
        this._exp = _exp;
    }
    Object.defineProperty(Employee.prototype, "firstName", {
        get: function () {
            return this._fName;
        },
        set: function (firstName) {
            this._fName = firstName;
        },
        enumerable: true,
        configurable: true
    });
    Employee.prototype.getEmployeeDetails = function () {
        return "First Name: " + this._fName +
            "Middle Name: " + this._mName +
            "Last Name: " + this._lName +
            "Designation: " + this._desig +
            "Salary: " + this._sal +
            "Age : " + this._age +
            "Experience:" + this._exp;
    };
    Employee.prototype.setEmployeeDetails = function (fName, lName, mName, desig, exp, age, sal) {
        this._fName = fName;
        this._mName = mName;
        this._lName = lName;
        this._desig = desig;
        this._sal = sal;
        this._age = age;
        this._exp = exp;
    };
    return Employee;
}());
var Manager = (function (_super) {
    __extends(Manager, _super);
    function Manager(_fName, _lName, _mName, _desig, _exp, _age, _sal, responsibility, street, city, country, isLocal) {
        var _this = _super.call(this, _fName, _lName, _mName, _desig, _exp, _age, _sal) || this;
        _this._fName = _fName;
        _this._lName = _lName;
        _this._mName = _mName;
        _this._desig = _desig;
        _this._exp = _exp;
        _this._age = _age;
        _this._sal = _sal;
        _this.responsibility = responsibility;
        _this.street = street;
        _this.city = city;
        _this.country = country;
        _this.isLocal = isLocal;
        _this.responsibility = responsibility;
        _this.street = street;
        _this.city = city;
        _this.country = country;
        _this.isLocal = isLocal;
        return _this;
    }
    Manager.prototype.getAddress = function () {
        if (this.isLocal) {
            return "Address:" + this.street + " " + this.city + " " + this.country;
        }
        else {
            return "Address cannot be accessed";
        }
    };
    Manager.prototype.setAddress = function (street, city, country, isLocal) {
        this.street = street;
        this.city = city;
        this.country = country;
        this.isLocal = isLocal;
    };
    return Manager;
}(Employee));
//# sourceMappingURL=Employee.js.map