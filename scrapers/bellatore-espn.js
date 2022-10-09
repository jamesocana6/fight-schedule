const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const URL = "https://www.espn.com/mma/schedule/_/league/bellator"
const fights = [];
const getData = async () => {
    const {data} = await axios.get(URL)
    const $ = cheerio.load(data)
    const dates = $("div:nth-child(3) > div > div > section > div > div:nth-child(3) > div > div.flex > div > div.Table__Scroller > table > tbody > tr > td:nth-child(1)");
    const times = $("div:nth-child(3) > div > div > section > div > div:nth-child(3) > div > div.flex > div > div.Table__Scroller > table > tbody > tr > td:nth-child(2)");
    const events = $("div:nth-child(3) > div > div > section > div > div:nth-child(3) > div > div.flex > div > div.Table__Scroller > table > tbody > tr > td:nth-child(4)");
    // Use .each method to loop through the elemtns we selected
    dates.each((idx, el) => {
        const fight = {date: "", index: ""};
        fight.index = idx;
        fight.date = $(el).text();
        fights.push(fight);
    });
    events.each((idx, el) => {
        fights[idx]["event"] = $(el).text();;
    });
    times.each((idx, el) => {
        fights[idx]["time"] = $(el).text();;
    });
    console.log("Bellatore fights ", fights)
    //#fittPageContainer > div:nth-child(3) > div > div > section > div > div:nth-child(3) > div > div.flex > div > div.Table__Scroller > table > tbody
}
getData()

module.exports = fights;