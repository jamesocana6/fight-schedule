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
        const fight = { index: "", event: "" };        
        fight["1"] = $(el).text().replaceAll(".","").split(" – ")[2]
        fight["2"] = $(el).text().replaceAll(".","").split(" – ")[3]
        fight["3"] = $(el).text().replaceAll(".","").split(" – ")[1]
        fight["4"] = $(el).text().replaceAll(".","").split(" – ")[0]
        fight.index = idx;
        fights.push(fight);
    });
    console.log(fights)
}

getData()

module.exports = fights;