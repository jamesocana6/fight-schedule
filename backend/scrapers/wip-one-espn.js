// const express = require("express");
// const axios = require("axios");
// const cheerio = require("cheerio");

// const URL1 = "https://www.espn.com/mma/schedule/"
// const URL2 = "https://www.onefc.com/events/"
// const fights = [];

// async function getData() {
//     const { data } = await axios.get(URL1);
//     const $ = cheerio.load(data);
//     //This weeks events
//     //div:nth-child(3) > div > div > section > div > div:nth-child > div > div.flex > div > div.Table__Scroller > table > tbody > tr:nth-child(1) > td:nth-child(2)
//     //div:nth-child(3) > div > div > section > div > div:nth-child(4) > div > div.flex > div > div.Table__Scroller > table > tbody > tr:nth-child(1) > td:nth-child(2)
//     const date = $("div:nth-child(3) > div > div > section > div > div:nth-child > div > div.flex > div > div.Table__Scroller > table > tbody > tr:nth-child(1) > td:nth-child(1)");
//     //const time = $("div:nth-child(3) > div > div > section > div > div:nth-child > div > div.flex > div > div.Table__Scroller > table > tbody > tr:nth-child(1) > td:nth-child(2)");
//     const event = $("div:nth-child(3) > div > div > section > div > div:nth-child > div > div.flex > div > div.Table__Scroller > table > tbody > tr:nth-child(1) > td:nth-child(4)");
//     // Use .each method to loop through the elemtns we selected
//     date.each((idx, el) => {
//         if ($(event[idx]).text().includes("ONE")) {
//             const fight = { index: ""};
//             fight.index = idx;
//             fight["date"] = $(el).text().substring(0,6).trim();
//             fight["event"] = $(event[idx]).text();
//     //        fight["time"] = $(time[idx]).text().replace(/EST/g, "ET");
//             fights.push(fight);
//         }
//     });
// }

// async function getLink() {
//     getData()
//     const { data } = await axios.get(URL2);
//     const $ = cheerio.load(data);
//     //This weeks events
//     const date = $("body > main > section.site-section.section-upcoming-events > div > div > article > header > div.date:nth-child(4) > span.day");
//     const time = $("body > main > section.site-section.section-upcoming-events > div > div > article > header > div.date:nth-child(4) > span.time");
//     const event = $("body > main > section.site-section.section-upcoming-events > div > div > article > header > h3 > a > span");
//     const link = $("body > main > section.site-section.section-upcoming-events > div > div > article > header > h3 > a");
//     // Use .each method to loop through the elemtns we selected
//     date.each((idx, el) => {
//         if (fights[idx] && $(el).text()) {
//             fights[idx]["date"] = $(el).text().substring(0,6).trim();
//             fights[idx]["event"] = $(event[idx]).text();
//             fights[idx]["link"] = $(link[idx]).attr("href");
//             fights[idx]["org"] = "ONE";
//         }
//     });
// }

// getLink()

// module.exports = fights;