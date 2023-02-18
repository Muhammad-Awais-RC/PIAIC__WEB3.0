let users = ["Muhammad", "Ali", "Hamza", "Hussain", "admin"];


users.map(user => {
  if (user === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  }
  else {
    console.log(`Hello ${user}, thank you for logging in again.`);
  }
})

users = [];

if (!users.length) {
  console.log("We need to find some users!");  
}
