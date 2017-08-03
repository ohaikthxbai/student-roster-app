var express = require("express");
var app = express();

var PORT = 3000;


app.get("/", function(req, res) {
    res.send("Welcome to this page!");
});

app.listen(PORT, function() {
    console.log(`Listening on PORT: ${PORT}`);
});
