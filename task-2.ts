let userName: string = "Muhammad";

const titleCase: Function = (name: string) =>
  name?.toLowerCase().charAt(0).toUpperCase() + name.slice(1);


console.log("User Name in lowercase " + userName.toLowerCase());
console.log("User Name in uppercase " + userName.toUpperCase());
console.log("User Name in titlecase " + titleCase(userName));

export {};
