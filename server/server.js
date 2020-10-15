const express = require('express')
const app = express()
const port = 3333
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
// parse application/json
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())
// app.get('/', (req, res) => {
//     console.log(req.body)
//   res.json({thing:'Hello World!'})
//   return 'hiwprl'
// })
app.get('/', function (req, res) {
  res.json({hi:"thisd is a JSON"})
})
app.post('/', function (req, res) {
  console.log(req.body.body)
  const https = require('https');
https.get(req.body.body.url, (resp) => {
  let data = '';
  resp.on('data', (chunk) => {
    data += chunk;
    console.log(data)
  });
  resp.on('end', () => {
    const resJson = JSON.parse(data)
    res.json(resJson)
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})