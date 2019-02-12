var express = require('express');
var router = express.Router();
var friends = require('../data/friends');

// Post a friend survey to find out their closest match
router.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    if (!newFriend || !newFriend.name || !newFriend.photo || !newFriend.scores) {
        return res.status(400).send('check your request, it was incomplete');
    }

    var leastDiff;
    var bestie;
    for (var f = 0; f < friends.length; f++) {
        var friend = friends[f];
        var friendDiff = 0;
        for (var i = 0; i < newFriend.scores.length; i++) {
            friendDiff += Math.abs(friend.scores[i] - newFriend.scores[i]);
        }
        if (f === 0 || friendDiff < leastDiff) {
            leastDiff = friendDiff;
            bestie = friend;
        }
    }

    friends.push(newFriend);
    res.status(200).send(bestie);
});

// Get the list of friends
router.get("/api/friends", function(req, res) {
    res.status(200).send(friends);
});

module.exports = router;
