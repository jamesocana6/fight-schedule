const express = require("express");
const app = express();
const PORT = 4000;
// const axios = require("axios");
// const cheerio = require("cheerio");
// const UFC = require("./scrapers/ufc-espn.js");
// const BELL = require("./scrapers/bellatore-espn.js");
// const ONE = require("./scrapers/one-intwwe.js");
const MMA = require("./scrapers/mma-espn.js");
const cors = require("cors");

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    // console.log(ONE)
    // console.log(BELL)
    res.json(MMA);
})

app.listen(PORT, () => {
    console.log("We are listening")
})