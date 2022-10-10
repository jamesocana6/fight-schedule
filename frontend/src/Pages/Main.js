import React from "react";
import Header from "../Components/Header.js";
import Scheduled from "../Components/Scheduled Fights.js";
import Upcoming from "../Components/Upcoming.js";
import Past from "../Components/Past.js";

const Main = ({fights}) => {
    const loaded = () => {
        return (
            <>
            <Header/>
            <Upcoming upcoming={fights[0]}/>
            <Scheduled scheduled={fights[1]}/>
            <Past past={fights[2]}/>
            </>
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