const magiciansName = ["Alice", "Bob", "Ricky"];

showMagicians(magiciansName);

function showMagicians( magicians : string[] )  {
  magicians.map(name => console.log(name));
}

export { };