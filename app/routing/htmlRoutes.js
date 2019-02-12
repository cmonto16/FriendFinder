var express = require('express');
var path = require("path");
var router = express.Router();

// Basic check for this router
router.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

// Catch all route that sends the user to the home page
router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

module.exports = router;
