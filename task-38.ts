describeCity();
describeCity("Karachi" , "Pakistan");
describeCity("Lahore", "Pakistan");
describeCity("Islamabad", "Pakistan");
describeCity("Peshawar", "Pakistan");

function describeCity(cityName: string = "Islamabad", countryName: string = "Pakistan") {
  console.log(cityName + " is in " + countryName)
}

export { };