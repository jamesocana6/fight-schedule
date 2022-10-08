const express = require("express");
const app = express();
const PORT = 4000;
const axios = require("axios");
const cheerio = require("cheerio");

const URL = "https://www.espn.com/mma/schedule/_/league/ufc"
const getData = async () => {
    const {data} = await axios.get(URL)
    const $ = cheerio.load(data)
    const headline = $(".event__col");
    const event = $(".date__innerCell");
    const time = $(".date__col a.AnchorLink")
    const fights = [];
    // Use .each method to loop through the elemtns we selected
    headline.each((idx, el) => {
        const fight = {index:"", event: ""};
        fight.event = $(el).children("a").text();
        fight.index = idx;
        fights.push(fight);
    });
    event.each((idx, el) => {
        const fight = {date: ""};
        fight.date = $(el).text();
        if (fight.date != undefined) {
            fights[idx]["date"] = fight.date;
        }
    });
    time.each((idx, el) => {
        const fight = {time: ""};
        fight.time = $(el).text();
        if (fight.time != undefined) {
            try {
                fights[idx]["time"] = fight.time;
            } catch {

            }
        }
    });
    console.log("These are fights: ", fights)
}


app.get('/', (req, res) => {
    getData();
    res.send("test")

})

app.listen(PORT, () => {
    console.log("We are listening")
})