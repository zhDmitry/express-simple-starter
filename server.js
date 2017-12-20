const mustacheExpress = require("mustache-express");
var express = require("express");
var app = express();

const schedule = {
  mon: [1, 2, 4],
  thu: [2, 4, 5]
};
const tumbler = {
  lala: 1
};

app.use(express.static("public"));
app.engine("mustache", mustacheExpress());

app.set("view engine", "mustache");

app.get("/", function(req, res) {
  res.send("hello");
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
