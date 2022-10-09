import React from "react";

const Main = (props) => {
    const loaded = () => {
        console.log("PROPS", props)
        return (
            <><h1>PROPS</h1></>
        )
    }
    const loading = () => {
        return (
            <><h1>Loading...</h1></>
        )
    }
    return props.state ? loaded() : loading();
}

export default Main;