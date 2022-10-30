import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <div className="header">
                <Link to ="/"><h1 className="title">Fight Schedule</h1></Link>
            </div>
            <div className="right-links">
                <Link to="/">Home</Link>
                <Link to="/highlighted">Highlighted</Link>
            </div>
        </nav>
    )
}

export default Header;