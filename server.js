var express = require("express");
var app = express();

var PORT = 3000;

var roster = [
    {
        name: 'Mark'
    },
    {
        name: 'Suzune'
    },
    {
        name: 'Saitama'
    }
];

// define routes
app.get("/", function(req, res) {
    res.send("Welcome to this page!");
});

app.get("/students", function(req, res) {
    res.json(roster);
});

app.get('/students/:studentId', function(req, res) {
    res.json(roster[req.params.studentId]);
});
// get route that returns three stooges
app.listen(PORT, function() {
    console.log(`Listening on PORT: ${PORT}`);
});
