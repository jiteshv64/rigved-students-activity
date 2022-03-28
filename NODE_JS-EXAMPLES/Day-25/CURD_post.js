let express = require("express");
let app = express();
let PORT = 3000;
let fs = require("fs");
let parser = require("body-parser");

app.use(parser.json());

app.listen(PORT, () => console.log(`Server running at ${PORT}`));

let data = fs.readFileSync("user.json");
let dataString = data.toString();
let jsArray = undefined;

if (dataString.length < 1 || dataString == "") {
  jsArray = [];
} else {
  jsArray = JSON.parse(dataString);
}

app.post("/user/:userId/:username/:userage", (req, res) => {
  let userId = req.params.userId;
  let username = req.params.username;
  let userage = req.params.userage;
  let user = { id: userId, name: username, age: userage };
  res.json(user);
  jsArray.push(user);
  let jsonArray = JSON.stringify(jsArray);
  fs.writeFileSync("user.json", jsonArray);
});

app.get("/user", (req, res) => {
  let data = fs.readFileSync("user.json");
  let datastring = data.toString();
  let jsObject = JSON.parse(datastring);
  res.json(jsObject);
});

app.get('/user/:id',(request,response)=>{
  let uId = request.params.id;
  let data = fs.readFileSync('user.json');
  let datastring = data.toString();
  let jsObject = JSON.parse(datastring);
  for(let i = 0; i < jsObject.length; i++){
      if(jsObject[i].id == uId){
          let showUser = {id: jsObject[i].id, name: jsObject[i].name, age: jsObject[i].age};
          response.json(showUser);
      }
  }
});

app.put("/user/:userId/:username/:userage", (req, res) => {
  let userId = req.params.userId;
  let username = req.params.username;
  let userage = req.params.userage;
  let user = { id: userId, name: username, age: userage };
  res.json(user);
  jsArray.push(user);
  let jsonArray = JSON.stringify(jsArray);
  fs.writeFileSync("user.json", jsonArray);
});

app.delete('/user/:id',(req,res) => {
  let uId = req.params.id;
  let data = fs.readFileSync('user.json');
  let datastring = data.toString();
  let jsObject = JSON.parse(datastring);
  for(let i = 0; i < jsObject.length; i++){
      if(jsObject[i].id == uId){
          jsObject.splice(i,1);
          let jsonObject = JSON.stringify(jsObject);
          fs.writeFileSync('user.json',jsonObject);
          res.json(jsObject);
      }
  }
});