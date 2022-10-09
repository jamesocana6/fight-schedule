const express = require("express");
const app = express();
const PORT = 4000;
// const axios = require("axios");
// const cheerio = require("cheerio");
const UFC = require("./scrapers/ufc-espn.js");
const BELL = require("./scrapers/bellatore-espn.js");
const ONE = require("./scrapers/one-intwwe.js");


app.get('/', (req, res) => {
    console.log(ONE)
    console.log(BELL)
    res.send(UFC)

})

app.listen(PORT, () => {
    console.log("We are listening")
})