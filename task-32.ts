const currentUsers = ["Muhammad", "Ali", "Hamza", "Hussain", "admin"];

const newUsers = ["Abu Zar", "Sheri", "Muhammad", "Ali", "Saqib"];


checkUsers(currentUsers, newUsers);


function checkUsers(curUsers: string[], nUsers: string[]) {
  
  curUsers = curUsers.map(user => user.toLowerCase());
  nUsers = nUsers.map(user => user.toLowerCase());

  nUsers.map((user, i) => {
    if (curUsers.indexOf(user) !== -1) {
      console.log(newUsers[i] + " username is already taken." );
    } else {
      console.log(newUsers[i] + " username is available");
    }
  } )

}


function convertArrToLowerCase(arr: string[]) {
  arr.map((v) => v.toLowerCase());
  return arr;
}