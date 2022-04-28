const express = require("express");
const app = express();

// app.use(express.static("public"))


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/game.html");
});

app.listen(process.env.PORT || 3000, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});