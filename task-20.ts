let age = 18; 

console.log("is age === 18 ? ( i predict true) ");
console.log(age === 18);

console.log("is age > 18 ? ( i predict false) ");
console.log(age > 18);

console.log("is age > 11 ? ( i predict true) ");
console.log(age > 11);

console.log("is age < 18 ? ( i predict false) ");
console.log(age < 18);

console.log("is age > 14 && age < 17 ? ( i predict false) ");
console.log(age > 14 && age < 17);


console.log("is age === 18 && age > 10 ? ( i predict true) ");
console.log(age === 18 && age > 10 );

console.log("is typeof age === string ? ( i predict false) ");
console.log( typeof age === "string" );

console.log("is typeof age === boolean ? ( i predict false) ");
console.log( typeof age === "boolean" );


console.log("is type of age === number ? ( i predict true) ");
console.log(typeof age === "number");


console.log("is typeof age === string || typeof age === number ? ( i predict true) ");
console.log(typeof age === "string" || typeof age === "number" );


console.log("is typeof age === string && typeof age === number ? ( i predict false) ");
console.log(typeof age === "string" && typeof age === "number" );

export { };