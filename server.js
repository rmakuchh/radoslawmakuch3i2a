const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000; // bardzo istotna linijka - port zostaje przydzielony przez Heroku

app.get("/", function (req, res) {
    res.send("<h1>my app on heroku! - kolejna mała zmiana w pliku </h1>")
})

var name = {imie: "Radosław", nazwisko: "Makuch", klasa:"3i2", grupa:"Ia"}

app.get("/", function (req, res) {
    res.send("name");
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})