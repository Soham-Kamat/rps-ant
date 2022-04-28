const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/game.html");
});

app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running on localhost:3000");
});