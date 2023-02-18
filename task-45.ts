console.log(makeCar("BMW", "X5"));
console.log();
console.log(makeCar("BMW", "X5", { "color": "blue" },));
console.log();
console.log(makeCar("Ford", "Mustang", { "color": "red" },));
console.log();
console.log(makeCar("BMW", "X7", { "color": "black" }, { "Rim Size": "19" }, { "Body Kit": "Batman" }));

type CarObj = {
  manufacturer: string,
  model: string,
  optionalFeatures?: {}[]
}

function makeCar(manufacturer: string, model: string, ...optionalFeatures: {}[]):CarObj {
  
  let obj = {
    manufacturer,
    model
  }
  if (!optionalFeatures.length) {
    return obj;
  }
  
  

  optionalFeatures.map(feature => {
    obj = {
      ...obj,
      ...feature,
    }
  })
  
  return obj;
}