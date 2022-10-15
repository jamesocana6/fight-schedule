const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const URL = "https://boxingschedule.co/"
const fights = [];
async function getData() {
    const { data } = await axios.get(URL);
    const $ = cheerio.load(data);
    //This weeks events
    // #mec_skin_events_4142 > div > div > div:nth-child(3) > div:nth-child(1) > article > div.event-detail-wrap > h4 > a    const datesUpcoming = $("div > div > figure.wp-block-table.has-small-font-size > table > tbody > tr > td:nth-child(1)");
    const events = $("a.mec-color-hover");
    // Use .each method to loop through the elemtns we selected
    events.each((idx, el) => {
        const fight = { index: ""};    
        let event = $(el).text().replaceAll(".","").replaceAll("-","–").split("–")
        if (event.length < 4) {
            fight["1"] = event[1].trim().substring(0,3).toUpperCase() + " " + event[1].trim().substring(event[1].trim().length-2)
            fight["2"] = event[2].trim()
            fight["3"] = event[3]
            fight["4"] = event[0].trim()
        } else {
            fight["1"] = (event[2].trim().substring(0,3).toUpperCase() + " " + event[2].trim().substring(event[2].trim().length-2)).replace("  ", " ")
            fight["2"] = event[3].trim()
            fight["3"] = event[1].trim()
            fight["4"] = event[0].trim()
        }    
        fight.index = idx;
        fight["org"]= "Boxing";
        fights.push(fight);
    });
}

getData()

module.exports = fights;