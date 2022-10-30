import React, { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import StarIcon from '@mui/icons-material/Star';
import { yellow } from "@mui/material/colors";


const Upcoming = ({ upcoming, addWatchlist, watchlist }) => {
    const [toggle, setToggle] = useState(true);

    function toggleTable() {
        setToggle(!toggle);
    }

    let table = upcoming.map((obj) => {
        let fightNames = []
        let className = ""
        for (let fight of watchlist) {
          fightNames.push(fight[4])
        } 
        if (fightNames.includes(obj["event"])) {
            className = "fav"
        }
        return (
            <tr className={className} key={obj.index+obj.org}>
                <td onClick={addWatchlist}>
                    <StarIcon sx={{ color: yellow[700] }}/>
                </td>
                <td>
                    {obj["org"]}
                </td>
                <td>
                    {obj["date"]}
                </td>
                <td>
                    {obj["time"]}
                </td>
                <td>
                    <a href={obj["link"]} target="_blank" rel="noreferrer">{obj["event"]}</a>
                </td>
            </tr>
        )
    })

    const clicked = () => {
        return (
            <div className="upcoming-fights">
                <div onClick={toggleTable} className="table-header">
                    <h2>Upcoming Fights</h2>
                    <div className="expand-icon">
                        <ExpandLessIcon />
                    </div>
                </div>
                <div className="fight-table">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                </th>
                                <th>
                                    ORG
                                </th>
                                <th>
                                    DATE
                                </th>
                                <th>
                                    TIME
                                </th>
                                <th>
                                    EVENT
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {table}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    const notClicked = () => {
        return (
            <div className="upcoming-fights">
                <div onClick={toggleTable} className="table-header">
                    <h2>Upcoming Fights</h2>
                    <div className="expand-icon">
                        <ExpandMoreIcon />
                    </div>
                </div>
            </div>
        )
    }

    return toggle ? clicked() : notClicked();
}

export default Upcoming;