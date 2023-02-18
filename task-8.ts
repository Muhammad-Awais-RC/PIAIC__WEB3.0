let userName: string = "Muhammad";

// Arrow function to convert a string to titled string 
const titleCase: Function = (name: string) =>
  name?.toLowerCase().charAt(0).toUpperCase() + name.slice(1);
  // using Implicit return feature of arrow function 
  // Algorithm :
    // first , converting the string to lowercase ( using lowercase() method )
    // second , converting the first char of string to upper case ( using uppercase() method )
    // third , slicing the string from 1 index to end  .

console.log("User Name in lowercase " + userName.toLowerCase());
console.log("User Name in uppercase " + userName.toUpperCase());
console.log("User Name in titlecase " + titleCase(userName));


// declaring the name variable
let name: string = "\t    Muhammad \n";

// printing  the name with whitespace 
console.log(name);
console.log("Name after trimming whitespaces ");
// printing the name without whitespace
// using the js trim function to remove whitespaces ( trim() removes whitespace from front and back) 
console.log(name.trim());

export {};