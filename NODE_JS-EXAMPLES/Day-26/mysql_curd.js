let express = require('express');
let parser = require('body-parser');
let mysql = require('mysql');


// referencing top level express function
let app = express();

//express server port
let PORT = 3001;

// start the express server
app.listen(PORT, () => console.log(`Server running in ${PORT}`));

// middleware to parse request & enable cors
app.use(parser.json());

let con = mysql.createConnection({
  host:"localhost",
  user: 'root',
  password: '1234',
  database: 'rigved_db'
});

con.connect((err) => {
  if(err) throw err;
  console.log('Connected!');
});

// Storing:
app.post('/emp', (request,response) => {
  let empD = request.body;
  let sql = "INSERT INTO emp SET?";
  let data = {id: empD.id, name: empD.name, salary: empD.salary };
  con.query(sql, data, (err, result, fields) => {
    if (err) throw err;
    response.json(result); 
  });
});

// Delete:
app.delete('/emp/:id', (request, response) => {
  let id = parseInt(request.params.id);
  let sql = "DELETE FROM emp WHERE id ="+id+"";
  con.query(sql, (err,result,fields) => {
    if (err) throw err;
    response.json(result); 
  });
});

// Getting all data :
app.get('/emp', (request, response) => {
  con.query("SELECT * FROM emp", (err, result, fields) => {
    if (err) throw err;
    response.json(result);
  });
});

// Getting single data:
app.get('/emp/:id', (request,response) => {
  let id = parseInt(request.params.id);
  let sql = "SELECT * FROM emp WHERE id ="+id+"";
  con.query(sql, (err,result,fields) => {
    if (err) throw err;
    response.json(result);
  });
});

// Updating the data:
app.put('/emp/:id', (request,response) => {
  let id = parseInt(request.params.id);
  let empD = request.body;
  let sql = "UPDATE emp SET salary="+empD.salary+" WHERE id="+id;
  con.query(sql, (err,result,fields) => {
    if (err) throw err;
    response.json(result);
  });
});

