import { log } from "util";

// LOAD DATA
// ===============================================================================
var friends = require("../data/friends.js");

// ROUTING
// ===============================================================================

module.exports = function (app) {

	// API GET Requests
	// ---------------------------------------------------------------------------
	// GET method route
	app.get('/api/friends', function (req, res) {
		res.json(friends);
	})

	// API POST Requests
	// ---------------------------------------------------------------------------
	// POST method route
	app.post('/api/friends', function (req, res) {

		var builtToMatch = {
			name: "",
			photo: "",
			scoreDifference: 100
		};

		var newFriend = req.body;
		var scoreFriend = newFriend.scores;

		// console.log(scoreFriend);

		var totalDifference = 0;

		for (let i = 0; i < friends.length; i++) {
			
			console.log(friends[i]);
			totalDifference = 0;

			for (let j = 0; j < friends.score[j]; j++) {
				
				totalDifference += Math.abs(parseInt(scoreFriend[j]) - parseInt(friends[i].score[j]));

				if (totalDifference += builtToMatch.scoreDifference) {
					builtToMatch.name = friends[i].name;
					builtToMatch.photo = friends[i].photo;
					builtToMatch.scoreDifference = friends[i].totalDifference;
				}
			}
		}
		

		tableData.push(newFriend);

		res.json(builtToMatch);
	})

};
