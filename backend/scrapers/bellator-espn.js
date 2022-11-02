const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const URL = "https://www.espn.com/mma/schedule/_/league/bellator"
const fights = [];

async function getData() {
    const { data } = await axios.get(URL);
    const $ = cheerio.load(data);
    //This weeks events
    //#fittPageContainer > div:nth-child(3) > div > div > section > div > div:nth-child(3) > div > div.flex > div > div.Table__Scroller > table > tbody
    const col1 = $("div:nth-child(3) > div > div > section > div > div > div > div.flex > div > div.Table__Scroller > table > tbody > tr > td:nth-child(1)");
    const col2 = $("div:nth-child(3) > div > div > section > div > div > div > div.flex > div > div.Table__Scroller > table > tbody > tr > td:nth-child(2)");
    const col3 = $("div:nth-child(3) > div > div > section > div > div > div > div.flex > div > div.Table__Scroller > table > tbody > tr > td:nth-child(3)");
    const col4 = $("div:nth-child(3) > div > div > section > div > div > div > div.flex > div > div.Table__Scroller > table > tbody > tr > td:nth-child(4)");
    const col5 = $("div:nth-child(3) > div > div > section > div > div > div > div.flex > div > div.Table__Scroller > table > tbody > tr > td.event__col.Table__TD > a")
    // const fights = $("div:nth-child(3) > div > div > section > div > div:nth-child(3) > div > div.flex > div > div.Table__Scroller > table > tbody > tr > td:nth-child(4)");
    // Use .each method to loop through the elemtns we selected
    col1.each((idx, el) => {
        const fight = { index: ""};
        fight.index = idx;
        fight["date"] = $(el).text();
        fight["time"] = $(col2[idx]).text() + " ET";
        fight["3"] = $(col3[idx]).text();
        fight["event"] = $(col4[idx]).text();
        fight["link"] = "https://www.espn.com"+$(col5[idx]).attr('href');
        fight["org"]= "Bellator";
        fights.push(fight);
    });
    return fights;
}

module.exports = getData;