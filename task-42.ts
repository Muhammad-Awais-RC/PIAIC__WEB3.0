let magiciansName = ["Alice", "Bob", "Ricky"];

showMagicians(magiciansName);

let makeGreat = (magicians: string[]) => magicians.map(name => "Great " + name);

console.log();
showMagicians( makeGreat(magiciansName));

function showMagicians( magicians : string[] )  {
  magicians.map(name => console.log(name));
}



export { };
