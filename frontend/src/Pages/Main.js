import React from "react";
import Scheduled from "../Components/Scheduled.js";
import Upcoming from "../Components/Upcoming.js";
import Past from "../Components/Past.js";

const Main = ({fights}) => {

    const loaded = () => {
        return (
            <div className="all-fights">
                <Upcoming upcoming={fights[0]}/>
                <Scheduled scheduled={fights[1]}/>
                <Past past={fights[2]}/>
            </div>
        )
    }
    const loading = () => {
        return (
            <><h1>Loading...</h1></>
        )
    }
    return fights ? loaded() : loading();
}

export default Main;