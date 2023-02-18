let str1 = "abc";
let str2 = "ABC";

console.log("is abc === abc ( i predict true) ");
console.log( str1 === "abc"  );

console.log("is abc === ABC ( i predict false) ");
console.log( str1 === str2  );

console.log("is abc !== ABC ( i predict true) ");
console.log( str1 !== str2  );


console.log("is abc === ABC.toLowerCase ( i predict true) ");
console.log( str1 === str2.toLowerCase()  );

console.log("is abc === ABC || abc === ABC.toLowerCase ( i predict true) ");
console.log( str1 === str2 || str1 === str2.toLowerCase() );

console.log("is abc === ABC && abc === ABC.toLowerCase ( i predict false) ");
console.log( str1 === str2 && str1 === str2.toLowerCase() );

console.log("is abc.toUpperCase === ABC && abc === ABC.toLowerCase ( i predict true) ");
console.log( str1.toUpperCase() === str2 && str1 === str2.toLowerCase() );


let num1 = 10; 
let num2 = 20;

console.log(" 10 !== 20 ( i predict true) ");
console.log( num1 === num2 );

console.log(" 10 === 20 ( i predict false) ");
console.log( num1 === num2 );


console.log(" 10 < 20 ( i predict true) ");
console.log( num1 < num2 );


console.log(" 10 > 20 ( i predict false) ");
console.log( num1 > num2 );

console.log(" 10 !== 20 && 10 < 20 ( i predict true) ");
console.log( num1 !== num2 && num1 < num2 );

console.log(" 10 === 20 || 10 < 20 ( i predict true) ");
console.log(num1 === num2 || num1 < num2 );


let arr = [100, 200, 400];

console.log("is [100 , 200 , 400] include 200 ( i predict true) ");
console.log(arr.indexOf(200) !== -1);

console.log("is [100 , 200 , 400] include 300 ( i predict false) ");
console.log(arr.indexOf(300) !== -1 );

console.log("is [100 , 200 , 400] not include 200 ( i predict false) ");
console.log((arr.indexOf(200) === -1));

console.log("is [100 , 200 , 400] not include 300 ( i predict true) ");
console.log((arr.indexOf(300) === -1));

export { };