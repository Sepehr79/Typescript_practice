"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function add(n1, n2, printResult) {
    const result = n1 + n2;
    if (printResult) {
        console.log("Result is" + result);
    }
    else {
        return result;
    }
}
const n1 = 5;
const n2 = 6;
console.log(add(n1, n2));
const person = {
    name: "sepehr",
    age: 21
};
console.log(person.name);
// nested objects
const product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
};
let names = ["sepehr", "amir", "reza"];
for (const name of names) {
    console.log(name);
}
let anyArray = [1, "sepehr", false];
let myTuple = [1, 2, "sepehr", false];
myTuple.push("sepehr");
for (let index of myTuple) {
    console.log(index);
}
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 6] = "ADMIN";
    Role["READ_ONLY"] = "READ_ONLY";
    Role[Role["USER"] = 7] = "USER";
})(Role || (Role = {}));
const role = Role.READ_ONLY;
if (role === Role.READ_ONLY) {
    console.log(role.toString());
}
let myArr = ["sepehr", 1, true, Role.ADMIN, { name: "sepehr", age: 21 }];
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
let costomFunction = add;
costomFunction(6, 5, true);
let anotherFunction = printHello;
anotherFunction();
// Function call back
function printResult(result) {
    console.log("Call back function: " + result);
}
function calculateAndDo(n1, n2, fun) {
    const result = n1 + n2;
    fun(result);
}
calculateAndDo(5, 6, printResult);
// Unknown type
let variable1;
let variable2 = "string";
variable1 = 5;
variable1 = "sepehr";
if (typeof variable1 === 'string') {
    variable2 = variable1;
}
function throwError(message, code) {
    throw { message: message, errorCode: code };
}
console.log("Hello world");
console.log("Testing");
let person2 = new main_1.Person("sepehr");
console.log(person2.personName);
