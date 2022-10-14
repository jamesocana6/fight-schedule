const express = require("express");
const app = express();
const PORT = 4000;
// const axios = require("axios");
// const cheerio = require("cheerio");
const UFC = require("./scrapers/ufc-espn.js");
const PFL = require("./scrapers/pfl-espn.js");
const BELL = require("./scrapers/bellator-espn.js");
//const ONE = require("./scrapers/one-intwwe.js");
//const MMA = require("./scrapers/mma-espn.js");
//const BOXING = require("./scrapers/boxing-intwwe.js");
const cors = require("cors");
const dates = {
     "JAN": "01", 
     "FEB": "02", 
     "MAR": "03", 
     "APR": "04", 
     "MAY": "05", 
     "JUN": "06", 
     "JUL": "07", 
     "AUG": "08", 
     "SEP": "09", 
     "OCT": "10", 
     "NOV": "11", 
     "DEC": "12", 
}


app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    
    // console.log(ONE)
    let fights = [...UFC, ...PFL, ...BELL];
    
    //console.log(fights[0]["1"])
    console.log(sortByDate(formatDate(fights)))
    //console.log(...UFC)
    // console.log(UFC)
    res.json(UFC);
    //res.json(BELL);
})

app.get('/boxing', (req, res) => {
    // console.log(ONE)
    //res.json(UFC);
    //console.log("BELL", BELL)
    res.json(BELL);
})

app.listen(PORT, () => {
    console.log("We are listening")
})

function formatDate(fights) {
    let mapped = fights.map((fight) => { 
        if (fight["1"].substring(3) < 10 ) {
            fight["1"] = fight["1"].substring(0,4) + "0" + fight["1"].substring(4).toString()
        }
        if (fight["1"].substring(0,3).toUpperCase() in dates) {
            fight["1"] = dates[fight["1"].substring(0,3).toUpperCase()] + fight["1"].substring(4)
        }
        return fight
    })
    return mapped
}

function sortByDate(fights) {
    let sorted = fights.sort((a,b) => b['1'] - a['1'] )
    return sorted
}