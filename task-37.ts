makeShirt();
makeShirt("medium");
makeShirt(40, "Recursion without base case ==== STACKOVERFLOW");

function makeShirt(size: number | string = "large" , messgae: string = "i love typescript ") {
  console.log(`The size of shirt is ${size} and message to print on shirt "${messgae}"`);
}