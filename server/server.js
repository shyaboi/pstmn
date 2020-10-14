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
app.use(bodyParser.json())
app.get('/', (req, res) => {
    console.log(req.body)
  res.json({thing:'Hello World!'})
  return 'hiwprl'
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})