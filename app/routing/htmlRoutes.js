
// DEPENDENCIES
// ===============================================================================
var path = require("path");

// ROUTING
// ===============================================================================
module.exports = function (app) {

	// HTML GET Requests
	// ---------------------------------------------------------------------------
	//  GET request is made to the homepage (survey)
	app.get('/survey', function (req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	// GET method route, catches all other route requests
	app.get('*', function (req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

};