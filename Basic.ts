var firstName: string = "Vinish";
var lastName: string = "George";
var designation: string = null;
var age: number = 38;
var isEmployee: boolean = true;
//commment shoud be removed
var unUsed;


//function test

function swapNum(num1: number, num2: number) {
    var temp: number;
    temp = num1;
    num1 = num2;
    num2 = temp;
    console.log("Swapped vairiables number 1=" + num1 + " number 2=" + num2);

}

var num1 = 10;
var num2 = 20;
console.log("original number values number 1= " + num1 + " number 2=" + num2);
swapNum(num1, num2);
function   getFullName(fName:string,lName:string,mName?:string):string{
    if(mName!=undefined)
    return fName+" "+mName+" "+lName;
    else
    return fName+" "+lName;
}

function getEmployeeDetails(fName:string,lName:string,mName:string):string{
    return  getFullName(fName,lName,mName);
    
}
