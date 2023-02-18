makeSandwich("Chicken", "Cheese", "vegetables", "fruit");
console.log();
makeSandwich("beef", "Cheese",);
console.log();
makeSandwich("Cheese", "vegetables", "honey");
console.log();
makeSandwich( "beef","vegetables", "Cheese" ,  "honey" , "fruit" );



function makeSandwich(...items: string[]) {
  console.log("Sandwich Making starting...");
  
  items.map((item) => console.log(item + " is added..."));

  console.log("Sandwich is ready");
  
}