function add(n1: number, n2: number, printResult?: boolean): number{
    const result = n1 + n2;
    if(printResult){
        console.log("Result is" + result)
    }else{
        return result;
    }
}

const n1 = 5
const n2 = 6

console.log(add(n1, n2))


const person: {name: string, age: number} = {
    name: "sepehr",
    age: 21
}

console.log(person.name)

// nested objects
const product: {
    id: string;
    price: number;
    tags: string[],
    details: {
      title: string;
      description: string;
    }
} = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
      title: 'Red Carpet',
      description: 'A great carpet - almost brand-new!'
    }
}

let names: string[] = ["sepehr", "amir", "reza"]
for(const name of names){
    console.log(name);
}

let anyArray : any[] = [1, "sepehr", false]

let myTuple: [number, number, string, boolean] = [1, 2, "sepehr", false]
myTuple.push("sepehr")

for(let index of myTuple){
    console.log(index);
}
 
enum Role {
    ADMIN = 6,
    READ_ONLY = "READ_ONLY",
    USER = 7
}

const role = Role.READ_ONLY

if(role === Role.READ_ONLY){
    console.log(role.toString())
}

let myArr : any[] = ["sepehr", 1, true, Role.ADMIN, {name: "sepehr", age: 21}]

type Combinable = number | string
type ConversionDescriptor = "as-string" | "as-number"

function combine(
    n1: Combinable,
    n2: Combinable,
    resultConvesion: ConversionDescriptor
     ){
    if((typeof n1 === 'number' && typeof n2 === 'number') || resultConvesion === 'as-number'){
        return +n1 + +n2;
    }
    return n1.toString() + n2.toString(); 
}

console.log(combine(4, "6", "as-string")) // 46
console.log(combine(4, "6", "as-number")) // 10

function printHello(): undefined | void{
    console.log("Hello world");
    return;
}



