// const express = require("express");
// const axios = require("axios");
// const cheerio = require("cheerio");

// const URL = "https://www.espn.com/mma/schedule/_/league/ufc"
// const fights = [];
// const getData = async () => {
//     const {data} = await axios.get(URL)
//     const $ = cheerio.load(data)
//     const headline = $(".event__col");
//     const event = $(".date__innerCell");
//     const time = $(".date__col a.AnchorLink")
//     // Use .each method to loop through the elemtns we selected
//     headline.each((idx, el) => {
//         const fight = {index:"", event: ""};
//         fight.event = $(el).children("a").text();
//         fight.index = idx;
//         fights.push(fight);
//     });
//     event.each((idx, el) => {
//         const fight = {date: ""};
//         fight.date = $(el).text();
//         if (fight.date != undefined) {
//             fights[idx]["date"] = fight.date;
//         }
//     });
//     time.each((idx, el) => {
//         const fight = {time: ""};
//         fight.time = $(el).text();
//         if (fight.time != undefined) {
//             try {
//                 fights[idx]["time"] = fight.time;
//             } catch {

//             }
//         }
//     });
//     console.log("These are fights: ", fights)
// }

// getData()

// module.exports = fights;