"use strict";
function add(n1, n2, printResult) {
    var result = n1 + n2;
    if (printResult) {
        console.log("Result is" + result);
    }
    else {
        return result;
    }
}
var n1 = 5;
var n2 = 6;
console.log(add(n1, n2));
var person = {
    name: "sepehr",
    age: 21
};
console.log(person.name);
// nested objects
var product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
};
var names = ["sepehr", "amir", "reza"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log(name_1);
}
var anyArray = [1, "sepehr", false];
var myTuple = [1, 2, "sepehr", false];
myTuple.push("sepehr");
for (var _a = 0, myTuple_1 = myTuple; _a < myTuple_1.length; _a++) {
    var index = myTuple_1[_a];
    console.log(index);
}
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 6] = "ADMIN";
    Role["READ_ONLY"] = "READ_ONLY";
    Role[Role["USER"] = 7] = "USER";
})(Role || (Role = {}));
var role = Role.READ_ONLY;
if (role === Role.READ_ONLY) {
    console.log(role.toString());
}
var myArr = ["sepehr", 1, true, Role.ADMIN, { name: "sepehr", age: 21 }];
function combine(n1, n2, resultConvesion) {
    if ((typeof n1 === 'number' && typeof n2 === 'number') || resultConvesion === 'as-number') {
        return +n1 + +n2;
    }
    return n1.toString() + n2.toString();
}
console.log(combine(4, "6", "as-string")); // 46
console.log(combine(4, "6", "as-number")); // 10
function printHello() {
    console.log("Hello world");
    return;
}
var costomFunction = add;
costomFunction(6, 5, true);
var anotherFunction = printHello;
anotherFunction();
// Function call back
function printResult(result) {
    console.log("Call back function: " + result);
}
function calculateAndDo(n1, n2, fun) {
    var result = n1 + n2;
    fun(result);
}
calculateAndDo(5, 6, printResult);
// Unknown type
var variable1;
var variable2 = "string";
variable1 = 5;
variable1 = "sepehr";
if (typeof variable1 === 'string') {
    variable2 = variable1;
}
function throwError(message, code) {
    throw { message: message, errorCode: code };
}
console.log("Hello world");
