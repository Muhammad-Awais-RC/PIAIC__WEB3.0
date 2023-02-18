let guests = ["Muhammad", "Ahmad", "Ali"];

let invitationMessage: Function = (name: string) => `Hey ${name}! Come join me for dinner at my place this Friday night.`;

printMessage();

console.log("Ahmad is not available");

let index = guests.indexOf("Ahmad");

guests[index] = "Hamza";

printMessage();

console.log("I found a bigger dinner table.");

guests.unshift("Maaz");

guests.splice(2, 0, "Abu Zar");

guests.push("Umar");

printMessage();

function printMessage() {
  // first using the map function to map the invitations message with name 
  // then using the array returned by the map function to console the messages
  guests.map((name) => invitationMessage(name)).map(msg => console.log(msg));
}


export { };