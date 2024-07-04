let count: number = 10
let nama: string = "Budi"
let arrNum: number[] = [1, 2, 3]
let arrStr: string[] = ["a", "b", "c"]
let benar: boolean = true

// type IPerson = { name: string, age: number, email: string }

interface IPerson { 
    name: string,  // required
    age?: number,  // optional
    email: string 
}

const person: IPerson = {
    name: "Andi",
    // age: 20,
    email: "andi@gmail.com"
}

function sum(a: number, b: number): number[] {
    console.log(a + b);   
    return [a, b]
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

const sum2 = (a: number, b: number): number => a + b 