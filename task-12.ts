let guests: string[] = ["Muhammad", "Ahmed", "Ali"];

let invitationMessage: Function = (name: string) => `Hey ${name}! Come join me for dinner at XYZ this Friday night.`;


// first using the map function to map the invitations message with name 
// then using the array returned by the map function to console the messages
guests.map((name) => invitationMessage(name)).map(msg => console.log(msg));

export { };


