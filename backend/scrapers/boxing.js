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
    const links = $("div.event-detail-wrap > h4 > a")
    // Use .each method to loop through the elemtns we selected
    events.each((idx, el) => {
        const fight = { index: ""};    
        let event = $(el).text().replaceAll(".","").replaceAll("-","–").split("–")
        if (event.length < 4) {
            fight["date"] = event[1].trim().substring(0,3).toUpperCase() + " " + event[1].trim().substring(event[1].trim().length-2)
            fight["event"] = event[0].trim()
            if (event[2].trim().substring(0, event[2].trim().indexOf(" ")).length <= 2) {
                fight["time"] = event[2].trim().substring(0, event[2].trim().indexOf(" ")) + ":00" + event[2].trim().substring(event[2].trim().indexOf(" ")).toUpperCase();
            }
        } else {
            fight["date"] = (event[2].trim().substring(0,3).toUpperCase() + " " + event[2].trim().substring(event[2].trim().length-2)).replace("  ", " ")
            fight["event"] = event[0].trim()
            if (event[3].trim().substring(0, event[3].trim().indexOf(" ")).length <= 2) {
                fight["time"] = event[3].trim().substring(0, event[3].trim().indexOf(" ")) + ":00" + event[3].trim().substring(event[3].trim().indexOf(" ")).toUpperCase();
            }        
        }    
        fight.index = idx;
        fight["link"] = $(links[idx]).attr("href")
        fight["org"] = "Boxing";
        fights.push(fight);
    });
}

getData()

module.exports = fights;