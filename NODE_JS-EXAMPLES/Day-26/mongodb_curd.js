// importing all the necessary libraries
let express = require('express');
let cors = require('cors');
let mongoClient = require('mongodb').MongoClient;
let parser = require('body-parser');
const { response } = require('express');

// referencing top level express function
let app = express();

//database url
let dbURL = 'mongodb://localhost:27017';

//express server port
let PORT = 3001;

// start the express server
app.listen(PORT, () => console.log(`Server running in ${PORT}`));

// middleware to parse request & enable cors
app.use(parser.json());
app.use(cors());

// Storing the documents in mongodb
// on POST: /users you must able to store the user object

app.post('/emps', (request, response) => {
  let userDocument = request.body;

  // connect(url,parser, callback)
  // parser parses the url to establish connection
  mongoClient.connect(dbURL, {useNewUrlParser : true}, (error, client) => {
    if (error)
      throw error;

    // connect to the mydb instance
    let db = client.db('mydb');

    //use the collection 'user' to insert the document
    db.collection('emp').insertOne(userDocument, (err, res) => {
      if(err) {
        // 409 status code is for conflict
        response.status(409).json({'message' : `User with an id ${userDocument._id} exists`})
      }
      // 201 status code is used when resource is created
      response.status(201).json(res);
      client.close();
    });
  });
});

// Deleting the documents based on id
// on DELETE:/users/:id to delete the document based on id

app.delete('/emps/:id', (request,response) => {
  let id = parseInt(request.params.id);
  mongoClient.connect(dbURL, {useNewUrlParser : true}, (error, client) => {
    if(error) throw error;
    let db = client.db('mydb');

    //use the collection 'user' and deleteOne() to delete based on id
    db.collection('emp').deleteOne({_id : id})
    .then((doc) => {
      response.json(doc);
      client.close();
    });
  });
});

// on GET: /users you must able to returns all the user object
app.get('/emps', (request, response) => {
  mongoClient.connect(dbURL, {useNewUrlParser : true}, (error, client) => {
    if(error)
      throw error;
    
    let db = client.db('mydb');
    let cursor = db.collection('emp').find();
    let users = [];

    // cursor.forEach(callback1, callback2)
    cursor.forEach((doc, err) => {
      if(err)
        throw err;
      
      users.push(doc);
    }, () => {
      response.json(users);
      client.close();

    });
  });
});

//Getting a single document bases on the _id
// on GET: /users/:id to get a single document based on id

app.get("/emps/:id", (request,response) => {
  // reading the path parameter, converting id in int format
  let id = parseInt(request.params.id);

  // connect(url, parser, callback)
  mongoClient.connect(dbURL, {useNewUrlParser : true}, (error, client) => {
    if(error)
      throw error;
    
    // use mydb instance
    let db = client.db('mydb');

    // use collection 'user'
    db.collection('emp').findOne({_id : id})
    .then((doc) => {
      if(doc != null) {
        response.json(doc);
      }else {
        response.status(404).json({'message': `Sorry ${id} doesn't exist`})
      }
      client.close();
    });
  });
});

// Updating the age in the document using id
// on PUT:/users/:id/:age to update age from id

app.put('/emps/:id/:state/:city/:pincode', (request, response) => {
  let id = parseInt(request.params.id);
  let stateNew = request.params.state;
  let cityNew = request.params.city;
  let pincodeNew = parseInt(request.params.pincode)
  mongoClient.connect(dbURL, {useNewUrlParser : true}, (error, client) => {
    if(error) throw error;
    let db = client.db('mydb');

    //use the collection 'user' and updateOne() to update the age on id
    db.collection('emp').updateOne({_id : id}, {$set:{address: {state: stateNew,city: cityNew, pincode: pincodeNew}}})
    .then((doc) => {
      response.json(doc);
      client.close();
    });
  });
});