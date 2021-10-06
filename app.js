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
