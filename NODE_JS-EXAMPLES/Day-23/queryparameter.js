let fs = require("fs");
// let read = require("readline-sync");

let data = fs.readFileSync("emp1.json");
let dataString = data.toString();
let jsArray = undefined;

if (dataString.length < 1 || dataString == "") {
  jsArray = [];
} else {
  jsArray = JSON.parse(dataString);
}

let http = require("http");
let url = require("url");
let PORT_NO = 3001;

http
  .createServer((request, response) => {
    let urlString = request.url;
    if (urlString != "/favicon.ico") {
      // extract the query parameter & convert it into javascript object
      let urlObject = url.parse(urlString, true); // true is a flag enable conversion
      let user = urlObject.query;
      console.log(user);
      console.log(JSON.stringify(user));
      response.writeHead(200, { "content-type": "text/html" });
      response.write(`<h2>Hello ${user.name}, your age is ${user.age}</h2>`);

      let n = user.name;
      let a = user.age;
      let emp = { name: n, age: a };
      jsArray.push(emp);
      let jsonArray = JSON.stringify(jsArray);

      fs.writeFileSync("emp1.json", jsonArray);
    }
    response.end();
  })
  .listen(PORT_NO, () => console.log(`Server running at ${3001}`));
