var express = require("express");
var http = require("http");

var server = http.createServer();

var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// requires the routing files and sends them the variable App which equals express
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});