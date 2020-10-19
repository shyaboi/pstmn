const express = require("express");
const app = express();
const port = 3333;
const https = require("https");
const http = require("http");
const path = require('path')

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
  app.use(express.static(path.join(__dirname, 'build')))

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  })
  // main post route for receiving react data
  app.post("/", function (req, res) {
    // incoming url to parse
  const urlToParse = req.body.body.url;
  const meth = req.body.body.picked;
  const bod = req.body.body.body;
  const url = new URL(urlToParse);
  const urlPort = url.port;
  const protocol = url.protocol;
  const host = url.hostname;
  const path = url.pathname;

  console.log("proto: " + protocol,"port: " + urlPort,`host: ` + host,"path" + path);

  // http get if the incoming method is a get
  if (meth === "GET") {
    console.log("gettin");
    https
      .get(req.body.body.url, (resp) => {
        let data = "";
        resp.on("data", (chunk) => {
          data += chunk;
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
  
  // if post method chosen
  if (meth === "POST") {
    console.log("postn'");

    if (bod == "{someExampleJSON:morjson}") {
      console.log("need a bod bud");
    }
    const options = {
      hostname: host,
      port: urlPort,
      path: path,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": bod.length,
      },
    };

    const req = https
      .request(options, (res) => {
        let data = "";

        console.log("Status Code:", res.statusCode);

        res.on("data", (chunk) => {
          data += chunk;
          data = data;
          console.log("respopnse data: " + data);
          req.json(data);
        });

        res.on("end", () => {
          // console.log('Body: ', JSON.parse(bod));
        });
      })
      .on("error", (err) => {
        console.log("Error: ", err.message);
      });

    req.write(bod);
    res.json(JSON.parse(bod));
    req.end();
  }
});

app.post("/past", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
