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

mongoose.Promise = global.Promise;
mongoose
  .connect(
    "mongodb://localhost:27017/jobProvider",
    { useNewUrlParser: true }
  );
var db = mongoose.connection;

app.use("/api/", basic);
app.listen(port);
