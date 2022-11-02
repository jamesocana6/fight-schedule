// DEPENDENCIES
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const UFC = require("./scrapers/ufc-espn.js");
const PFL = require("./scrapers/pfl-espn.js");
const BELL = require("./scrapers/bellator-espn.js");
const BOXING = require("./scrapers/boxing.js");
const ONE = require("./scrapers/one-intwwe.js");
const cors = require("cors");

// DATE FIXING
const date = new Date();
let fixedDate = date.getDate().toString();
if (date.getDate() < 10) {
    fixedDate = "0" + date.getDate().toString();
}
const today = (date.getMonth()+1).toString() + fixedDate;
const datePlusOneWeek = new Date()
let fixedDate2 = datePlusOneWeek.getDate().toString();
datePlusOneWeek.setDate(datePlusOneWeek.getDate() + 7)
if (datePlusOneWeek.getDate() < 10) {
    fixedDate2 = "0" + datePlusOneWeek.getDate().toString();
}
const nextWeek = (datePlusOneWeek.getMonth()+1).toString() + fixedDate2;

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

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get('/', async (req, res) => {
    let bell = await BELL();
    let boxing = await BOXING();
    let ufc = await UFC();
    let pfl = await PFL();
    let one = await ONE();
    let past = []
    let scheduled = []
    let upcoming = []
    let fights = [...ufc, ...pfl, ...bell, ...boxing, ...one];
    let sorted = sortByDate(formatDate(fights))
    for (let fight of sorted) {
        if (fight["date"] >= today && Number.parseInt(fight["date"]) < Number.parseInt(nextWeek)) {
            upcoming.push(fight);
        } else if (fight["date"] >= today) {
            scheduled.push(fight);
        } else {
            past.push(fight);
        }
    }
    fights = [dateMMM(upcoming), dateMMM(scheduled), dateMMM(past)]
    res.json(fights);
})

app.listen(PORT, () => {
    console.log("We are listening")
})

function formatDate(fights) {
    if (fights.length > 0) {
        let mapped = fights.map((fight) => { 
            if (fight["date"]) {
                if (fight["date"].substring(4).length == 1 ) {
                    fight["date"] = fight["date"].substring(0,4) + "0" + fight["date"].substring(4)
                }
                if (fight["date"].substring(0,3).toUpperCase() in dates) {
                    fight["date"] = dates[fight["date"].substring(0,3).toUpperCase()] + fight["date"].substring(4)
                }
                return fight
            }
        })
        return mapped
    } else {
        return [];
    }
}

function sortByDate(fights) {
    if (fights.length > 0) {
        let sorted = fights.sort((a,b) => a['date'] - b['date'] )
        let i = 0;
        for (let fight of sorted) {
            if (fight.index) {
                fight.index = i
                i++
            }
            //console.log(fight)
        }
        return sorted
    } else {
        return []
    }
}

function dateMMM(fights) {
    if (fights.length > 0) {
        let monthArr = []
        let mapped = fights.map((fight) => { 
            month = Object.keys(dates).find((key) => dates[key] === fight["date"].substring(0,2))
            monthArr.push(month)
            return fight
        })
        for (let i = 0 ; i < fights.length ; i++) {
            if (fights[i]["date"].length != 6 ) {
                fights[i]["date"] = monthArr[i] + " " + fights[i]["date"].substring(2)
            }
        }
        return mapped
    } else {
        return []
    } 
}

// TODO: and then maybe link to the real website if possible. Use indexing to correctly find the fight. 
// Add favorites to a list? Local storage array. onclick get row. 
// row 1 is stars click stars to favorite
// make fights reappear onclick checkbox = unchecked DONE
// css animations

// ICEBOX: Style front end, maybe add a calendar, allow filtering by org
// show page to show all the fights on the card
