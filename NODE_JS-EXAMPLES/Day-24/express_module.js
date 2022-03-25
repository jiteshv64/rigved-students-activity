let fs = require("fs");
// let read = require("readline-sync");

let data = fs.readFileSync('emp.json');
let dataString = JSON.parse(data);


let express = require('express');
let app = express();
app.listen(3003, () => console.log('Server is running in 3003'));

app.get('/employee', (request, response) => {
  response.json(dataString); // converts js objects to json and returns that as a response
});

