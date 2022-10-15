const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const URL1 = "https://www.itnwwe.com/mma/one-championship-schedule/"
const URL2 = "https://www.onefc.com/events/"
const fights = [];

async function getTime() {
    const { data } = await axios.get(URL1);
    const $ = cheerio.load(data);
    //This weeks events
    const time = $("div > div > figure:nth-child(5) > table > tbody > tr > td:nth-child(4)");
    // Use .each method to loop through the elemtns we selected
    time.each((idx, el) => {
        const fight = { index: ""};
        fight.index = idx;
        fight["time"] = $(el).text().replaceAll("EST", "ET");
        fights.push(fight);
    });
}

async function getData() {
    getTime()
    const { data } = await axios.get(URL2);
    const $ = cheerio.load(data);
    //This weeks events
    const date = $("body > main > section.site-section.section-upcoming-events > div > div > article > header > div.date > span.day");
    const event = $("body > main > section.site-section.section-upcoming-events > div > div > article > header > h3 > a > span");
    const link = $("body > main > section.site-section.section-upcoming-events > div > div > article > header > h3 > a");
    // Use .each method to loop through the elemtns we selected
    date.each((idx, el) => {
        if (fights[idx] && $(el).text()) {
            fights[idx]["date"] = $(el).text().substring(0,6).trim();
            fights[idx]["event"] = $(event[idx]).text();
            fights[idx]["link"] = $(link[idx]).attr("href");
            fights[idx]["org"] = "ONE";
        }
    });
}

getData()

module.exports = fights;