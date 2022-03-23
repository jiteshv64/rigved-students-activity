let fs=require('fs');
let data = fs.readFileSync('employee.json');
let jsonString=data.toString();
let jsObject=JSON.parse(jsonString);

for (const i in jsObject) {
 let {id, name, salary} = jsObject[i];
 console.log(`Id: ${id}, Name: ${name}, Salary: ${salary}`);
}