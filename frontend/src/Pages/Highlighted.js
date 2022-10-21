import React from "react";
import Scheduled from "../Components/Scheduled.js";
import Upcoming from "../Components/Upcoming.js";
import Filter from '../Components/Filter';
import Header from '../Components/Header';

const Highlighted = ({ fights, addWatchlist, watchlist, setUnselectedOrgs }) => {

    const loaded = () => {
        let fightNames = []
        for (let fight of watchlist) {
          fightNames.push(fight[4])
        } 
        let starFights = []
        for (let i = 0; i < 2; i++) {
            let fightArr = []
            for (let fight of fights[i]) {
                if (fightNames.includes(fight["event"])) {
                    fightArr.push(fight)
                }
            }
            starFights.push(fightArr)
        }
        // console.log(starFights)
        return (
            <>
                <Header />
                <Filter setUnselectedOrgs={setUnselectedOrgs} />
                <div className="all-fights">
                    <Upcoming upcoming={starFights[0]} addWatchlist={addWatchlist} watchlist={watchlist} />
                    <Scheduled scheduled={starFights[1]} addWatchlist={addWatchlist} watchlist={watchlist} />
                </div>
            </>
        )
    }
    const loading = () => {
        return (
            <>
                <Header />
                <Filter setUnselectedOrgs={setUnselectedOrgs} />
                <h1>Loading...</h1>
            </>
        )
    }
    return fights ? loaded() : loading();
}

export default Highlighted;