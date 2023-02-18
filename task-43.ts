let magiciansName = ["Alice", "Bob", "Ricky"];

showMagicians(magiciansName);

let makeGreat = (magicians: string[]) => magicians.map(name => "Great " + name);

let greatMagiciansName = makeGreat([...magiciansName]);

showMagicians(greatMagiciansName);

function showMagicians( magicians : string[] )  {
  magicians.map(name => console.log(name));
}



export { };