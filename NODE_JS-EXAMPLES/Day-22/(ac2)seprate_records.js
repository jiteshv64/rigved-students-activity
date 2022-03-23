let read = require("readline-sync");
let fs = require('fs');

let id = read.question("Enter your id: ");
let name = read.question("Enter your name: ");
let salary = read.question("Enter your salary: ");

let employee = {
  "id": id, "name": name, "salary": salary
};

const data = JSON.stringify(employee, null, 2);

let records = fs.readFileSync('employee.json').toString();
if(records.endsWith('}]')==true){
  let statement = records.slice(0,(records.length-1));
  let emp = `${statement},\n${data}]`
  fs.writeFileSync('employee.json',emp);
    console.log('JSON File Done...');
}else{
  let emp = `[${data}]`;
  fs.writeFileSync('employee.json',emp);
  console.log('JSON File Done...');
}