
// Dependencies
// =============================================================
const path = require("path");

// Sets up the Express App
// =====================================
const express = require("express");
var app = express();

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
// =====================================
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// ROUTES
// ================================================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// LISTENERS
// ================================================================================
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});