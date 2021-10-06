function add(n1: number, n2: number, printResult?: boolean){
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


