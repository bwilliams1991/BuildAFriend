
// LOAD DATA
// ===============================================================================
var friendsData = require("../data/friends");

// ROUTING
// ===============================================================================

module.exports = function (app) {

	// API GET Requests
	// ---------------------------------------------------------------------------
	// GET method route
	app.get('/api/friends', function (req, res) {
		res.json(friendsData);
	})

	// API POST Requests
	// ---------------------------------------------------------------------------
	// POST method route
	app.post('/api/friends', function (req, res) {

		var newFriend = req.body;

		tableData.push(newFriend);
	})

};
