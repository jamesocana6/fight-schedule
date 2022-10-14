// const express = require("express");
// const axios = require("axios");
// const cheerio = require("cheerio");

// const URL = "https://www.itnwwe.com/boxing/boxing-schdule-upcoming-fights/"
// const fightsUpcoming = [];
// async function getData() {
//     const { data } = await axios.get(URL);
//     const $ = cheerio.load(data);
//     //This weeks events
//     //#post-48047 > div > div > figure.wp-block-table.has-small-font-size > table > tbody > tr:nth-child(1) > td:nth-child(1)
//     const datesUpcoming = $("div > div > figure.wp-block-table.has-small-font-size > table > tbody > tr > td:nth-child(1)");
//     const timesUpcoming = $("div > div > figure.wp-block-table.has-small-font-size > table > tbody > tr > td:nth-child(3)");
//     const eventsUpcoming = $("div > div > figure.wp-block-table.has-small-font-size > table > tbody > tr > td:nth-child(2)");
//     // const fights = $("div:nth-child(3) > div > div > section > div > div:nth-child(3) > div > div.flex > div > div.Table__Scroller > table > tbody > tr > td:nth-child(4)");
//     // Use .each method to loop through the elemtns we selected
//     eventsUpcoming.each((idx, el) => {
//         const fight = { index: "", event: "" };
//         fight.event = $(el).text();
//         fight.index = idx;
//         fightsUpcoming.push(fight);
//     });
//     datesUpcoming.each((idx, el) => {
//         let dateFix = $(el).text();
//         let month = dateFix.slice(0,3);
//         fightsUpcoming[idx]["date"] = $(el).text();
//     });
//     timesUpcoming.each((idx, el) => {
//         fightsUpcoming[idx]["time"] = $(el).text();
//     });
// }

// getData()

// module.exports = fightsUpcoming;