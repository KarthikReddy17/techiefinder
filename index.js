const bodyParser = require("body-parser");
var express = require("express"),
  app = express(),
  port = 3000;

var basic = require('./router/basic')

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use("/api/", basic);
app.listen(port);
