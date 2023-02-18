let guests = ["Muhammad", "Ahmad", "Ali"];

let invitationMessage: Function = (name: string) => `Hey ${name}! Come join me for dinner at my place this Friday night.`;


console.log();
printMessage();
console.log();


console.log("Ahmad is not available");

let index = guests.indexOf("Ahmad");

guests[index] = "Hamza";

console.log();
printMessage();
console.log();


console.log("I found a bigger dinner table.");

guests.unshift("Maaz");

guests.splice(2, 0, "Abu Zar");

guests.push("Umar");

console.log();
printMessage();
console.log();

console.log("I can invite only two people for dinner");

while (guests.length > 2) {
  let name = guests.pop();
  console.log(`Sorry, ${name} i can't invite you to dinner `);
}

console.log();
printMessage();
console.log();

guests = [];

printMessage();

function printMessage() {
  // first using the map function to map the invitations message with name 
  // then using the array returned by the map function to console the messages
  guests.map((name) => invitationMessage(name)).map(msg => console.log(msg));
}


export { };