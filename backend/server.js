const express = require("express");
const app = express();
const PORT = 4000;
// const axios = require("axios");
// const cheerio = require("cheerio");
const UFC = require("./scrapers/ufc-espn.js");
const PFL = require("./scrapers/pfl-espn.js");
const BELL = require("./scrapers/bellator-espn.js");
const BOXING = require("./scrapers/boxing.js");
//const ONE = require("./scrapers/one-intwwe.js");
//const MMA = require("./scrapers/mma-espn.js");
//const BOXING = require("./scrapers/boxing-intwwe.js");
const cors = require("cors");
const date = new Date();
const today = (date.getMonth()+1).toString() + date.getDate().toString()
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
    let past = []
    let scheduled = []
    let upcoming = []
    let fights = [...UFC, ...PFL, ...BELL, ...BOXING];
    let sorted = sortByDate(formatDate(fights))
    for (let fight of sorted) {
        if (fight["1"] >= today && Number.parseInt(fight["1"]) < Number.parseInt(today) + 7) {
            upcoming.push(fight);
        } else if (fight["1"] >= today) {
            scheduled.push(fight);
        } else {
            past.push(fight);
        }
    }
    fights = [dateMMM(upcoming), dateMMM(scheduled), dateMMM(past)]
    res.json(fights);
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
        if (fight["1"].substring(4).length == 1 ) {
            fight["1"] = fight["1"].substring(0,4) + "0" + fight["1"].substring(4)
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
    let i = 0;
    for (let fight of sorted) {
        fight.index = i
        i++
        console.log(fight)
    }
    return sorted
}

function dateMMM(fights) {
    let monthArr = []
    let mapped = fights.map((fight) => { 
        month = Object.keys(dates).find((key) => dates[key] === fight["1"].substring(0,2))
        monthArr.push(month)
        return fight
    })
    for (let i = 0 ; i < fights.length ; i++) {
        if (fights[i]["1"].length != 6 ) {
            fights[i]["1"] = monthArr[i] + " " + fights[i]["1"].substring(2)
        }
    }
    return mapped
}