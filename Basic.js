var firstName = "Vinish";
var lastName = "George";
var designation = null;
var age = 38;
var isEmployee = true;
var unUsed;
function swapNum(num1, num2) {
    var temp;
    temp = num1;
    num1 = num2;
    num2 = temp;
    console.log("Swapped vairiables number 1=" + num1 + " number 2=" + num2);
}
var num1 = 10;
var num2 = 20;
console.log("original number values number 1= " + num1 + " number 2=" + num2);
swapNum(num1, num2);
function getFullName(fName, lName, mName) {
    if (mName != undefined)
        return fName + " " + mName + " " + lName;
    else
        return fName + " " + lName;
}
function getEmployeeDetails(fName, lName, mName) {
    return getFullName(fName, lName, mName);
}
//# sourceMappingURL=Basic.js.map