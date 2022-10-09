const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const URL = "https://www.espn.com/mma/schedule"
const fights = [];
const fightsUpcoming = [];
const fightsScheduled = [];
const fightsPast = [];
async function getData() {
    const { data } = await axios.get(URL);
    const $ = cheerio.load(data);
    //This weeks events
    //#fittPageContainer > div:nth-child(3) > div > div > section > div > div:nth-child(3) > div > div.flex > div > div.Table__Scroller > table > tbody
    const datesUpcoming = $("div:nth-child(3) > div > div > section > div > div:nth-child(3) > div > div.flex > div > div.Table__Scroller > table > tbody > tr > td:nth-child(1)");
    const timesUpcoming = $("div:nth-child(3) > div > div > section > div > div:nth-child(3) > div > div.flex > div > div.Table__Scroller > table > tbody > tr > td:nth-child(2)");
    const eventsUpcoming = $("div:nth-child(3) > div > div > section > div > div:nth-child(3) > div > div.flex > div > div.Table__Scroller > table > tbody > tr > td:nth-child(4)");
    // const fights = $("div:nth-child(3) > div > div > section > div > div:nth-child(3) > div > div.flex > div > div.Table__Scroller > table > tbody > tr > td:nth-child(4)");
    // Use .each method to loop through the elemtns we selected
    eventsUpcoming.each((idx, el) => {
        const fight = { index: "", event: "" };
        fight.event = $(el).text();
        fight.index = idx;
        fightsUpcoming.push(fight);
    });
    datesUpcoming.each((idx, el) => {
        fightsUpcoming[idx]["date"] = $(el).text();
    });
    timesUpcoming.each((idx, el) => {
        fightsUpcoming[idx]["time"] = $(el).text();
    });
    fights.push(fightsUpcoming);
    //Scheduled events
    //#fittPageContainer > div:nth-child(3) > div > div > section > div > div:nth-child(4) > div > div.flex > div > div.Table__Scroller > table > tbody
    const datesScheduled = $("div:nth-child(3) > div > div > section > div > div:nth-child(4) > div > div.flex > div > div.Table__Scroller > table > tbody > tr > td:nth-child(1)");
    const timesScheduled = $("div:nth-child(3) > div > div > section > div > div:nth-child(4) > div > div.flex > div > div.Table__Scroller > table > tbody > tr > td:nth-child(2)");
    const eventsScheduled = $("div:nth-child(3) > div > div > section > div > div:nth-child(4) > div > div.flex > div > div.Table__Scroller > table > tbody > tr > td:nth-child(4)");
    // Use .each method to loop through the elemtns we selected
    eventsScheduled.each((idx, el) => {
        const fight = { index: "", event: "" };
        fight.event = $(el).text();
        fight.index = idx;
        fightsScheduled.push(fight);
    });
    datesScheduled.each((idx, el) => {
        fightsScheduled[idx]["date"] = $(el).text();
    });
    timesScheduled.each((idx, el) => {
        fightsScheduled[idx]["time"] = $(el).text();
    });
    fights.push(fightsScheduled);
    //Past events
    //#fittPageContainer > div:nth-child(3) > div > div > section > div > div:nth-child(5) > div > div.flex > div > div.Table__Scroller > table > tbody
    const datesPast = $("div:nth-child(3) > div > div > section > div > div:nth-child(5) > div > div.flex > div > div.Table__Scroller > table > tbody > tr > td:nth-child(1)");
    const eventsPast = $("div:nth-child(3) > div > div > section > div > div:nth-child(5) > div > div.flex > div > div.Table__Scroller > table > tbody > tr > td:nth-child(2)");
    // Use .each method to loop through the elemtns we selected
    eventsPast.each((idx, el) => {
        const fight = { index: "", event: "" };
        fight.event = $(el).text();
        fight.index = idx;
        fightsPast.push(fight);
    });
    datesPast.each((idx, el) => {
        fightsPast[idx]["date"] = $(el).text();
    });
    fights.push(fightsPast);
}

getData()

module.exports = fights;