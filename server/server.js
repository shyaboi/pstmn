const express = require("express");
const app = express();
const port = 3333;
const https = require("https");
const http = require("http");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// parse application/json
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.json({ hi: "thisd is a JSON" });
});
// main post route for receiving react data
app.post("/", function (req, res) {
  const meth = req.body.body.picked;
  const bod = req.body.body.body;
  // http get if the incoming method is a get

  if (meth === "GET") {
    console.log("gettin")
    https
      .get(req.body.body.url, (resp) => {
        let data = "";
        resp.on("data", (chunk) => {
          data += chunk;
          console.log(data);
        });
        resp.on("end", () => {
          const resJson = JSON.parse(data);
          res.json(resJson);
        });
      })
      .on("error", (err) => {
        console.log("Error: " + err.message);
      });
  }
const urlToParse = req.body.body.url
  if (meth === "POST") {
    console.log("postn'")
    
    if (bod == "{someExampleJSON:morjson}"){
      console.log('need a bod bud')
    }
    const postBody = JSON.parse(bod);

    const data = JSON.stringify({
      postBody
  });

  const url = new URL(urlToParse);
  const urlPort = url.port
  const protocol = url.protocol
  const host = url.hostname
  const path = url.pathname

  console.log('proto: ' + protocol,'port: '+urlPort, `host: `+host, 'path'+path)
// console.log(url.pathname)
  const options = {
      hostname: host,
      port:urlPort,
      path: path,
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Content-Length': bod.length
      }
  };
  
  
  const req = http.request(options, (res) => {
      let data = '';

      console.log('Status Code:', res.statusCode);
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        console.log('Body: ', JSON.parse(bod));
      });
      
    }).on("error", (err) => {
      console.log("Error: ", err.message);
    });
    
    req.write(bod);
  res.json(JSON.parse(bod));
  req.end();
  }
});



app.post("/past", function (req, res) {
  console.log(req.body)
  res.send(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
