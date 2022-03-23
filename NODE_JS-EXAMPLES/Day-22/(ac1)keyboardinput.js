let read = require("readline-sync");
let fs = require('fs');

let id = read.question("Enter your id: ");
let name = read.question("Enter your name: ");
let salary = read.question("Enter your salary: ");

let employee = {
  "id": id, "name": name, "salary": salary
};

const data = JSON.stringify(employee, null, 2);

fs.writeFileSync('employee.json', data, {flag: 'a+'});
console.log("JSON file is Saved");
 

