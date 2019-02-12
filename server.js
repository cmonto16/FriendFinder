// Dependencies
// =============================================================
var express = require("express");
var apiRouter = require("./app/routing/apiRoutes");
var htmlRouter = require("./app/routing/htmlRoutes");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Basic check for the server
app.get("/ping", function(req, res) {
  res.status(200).send("pong");
});

app.use(apiRouter);
app.use(htmlRouter);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
