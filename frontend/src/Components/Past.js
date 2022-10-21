import React, { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


const Past = ({ past }) => {
    const [ toggle, setToggle ] = useState(false);

    function toggleTable() {
        setToggle(!toggle);
    }

    let table = past.map((obj) => {
        return (
            <tr key={obj.index}>
                <td>
                    {obj["org"]}
                </td>
                <td>
                    {obj["date"]}
                </td>
                <td>
                    <a href={obj["link"]} target="_blank" rel="noreferrer">{obj["time"].replace(" ET", "")}</a>
                </td>
            </tr>
        )
    })

    const clicked = () => {
        return (
            <div className="past-fights">
                <div onClick={toggleTable} className="table-header">
                    <h2>Past Fights This Year</h2>
                    <div className="expand-icon">
                        <ExpandLessIcon/>
                    </div>
                </div>
                <div className="fight-table">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    ORG
                                </th>
                                <th>
                                    DATE
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
            <div className="past-fights">
                <div onClick={toggleTable} className="table-header">
                    <h2>Past Fights This Year</h2>
                    <div className="expand-icon">
                        <ExpandMoreIcon/>
                    </div>
                </div>
            </div>
        )
    }

    return toggle? clicked() : notClicked();
}

export default Past;