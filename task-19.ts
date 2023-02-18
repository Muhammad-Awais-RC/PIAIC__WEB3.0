type PersonObj = {
  name: string,
  age?: number,
  cnic?: number,
  address?: string,
}

let person1: PersonObj = {
  name: "Muhammad", 
  age: 17,
  address:"Islamabad Pakistan",
}

let person2: PersonObj = {
  name: "Ali",
  age: 18, 
  cnic: 44444,
}

console.log(person1);
console.log(person2);
