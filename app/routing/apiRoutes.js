
// LOAD DATA
// ===============================================================================
var friendsData = require("../data/friends");

// ROUTING
// ===============================================================================

module.exports = function (app) {

	// API GET Requests
	// ---------------------------------------------------------------------------
	// GET method route
	app.get('/', function (req, res) {
		res.send('GET request to the homepage')
	})

	// API POST Requests
	// ---------------------------------------------------------------------------
	// POST method route
	app.post('/', function (req, res) {

		var newFriend = req.body;
		res.send('POST request to the homepage');
	})

};
