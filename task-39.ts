console.log(cityCountry("Lahore", "Pakistan"));
console.log(cityCountry("Karachi", "Pakistan"));
console.log(cityCountry("Multan", "Pakistan"));
console.log(cityCountry());



function cityCountry(cityName: string = "Islamabad", countryName: string = "Pakistan"): string{
  return `"${cityName}, ${countryName}"`;
}

export { };