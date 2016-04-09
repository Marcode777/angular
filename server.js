var express = require("express");
var logger =  require("morgan");

var app = express();

var PORT = process.env.NODE_ENV || 6700;

app.use(logger("dev"));
app.use(express.static("public"));

app.listen(PORT, function(){
  console.log("It's on " + PORT);
})

