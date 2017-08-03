var express = require("express");
var app = express();
var bodyParser = require("body-parser");


var PORT = 3000;

// in order to take in POST data easily
// process PUT and POST data; url query strings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


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
// req = what's coming in
// res = whtat's being outputted
app.get('/students/:studentId', function(req, res) {
    res.json(roster[req.params.studentId].name);
});

app.post('/add', function(req, res){
    
});

// get route that returns three stooges
app.listen(PORT, function() {
    console.log(`Listening on PORT: ${PORT}`);
});
