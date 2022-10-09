const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const URL = "https://www.itnwwe.com/mma/one-championship-schedule/"
const fights = [];
const getData = async () => {
    const {data} = await axios.get(URL)
    const $ = cheerio.load(data)
    const dates = $("figure:nth-child(5) > table > tbody > tr > td:nth-child(1)");
    const events = $("figure:nth-child(5) > table > tbody > tr > td:nth-child(2)");
    const times = $("figure:nth-child(5) > table > tbody > tr > td:nth-child(4)");
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
    console.log("ONE fights ", fights)
    //#post-45634 > div > div > figure:nth-child(5) > table > tbody
}
getData()

module.exports = fights;