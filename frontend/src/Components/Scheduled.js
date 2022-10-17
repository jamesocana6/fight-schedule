import React, { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Scheduled = ({ scheduled }) => {
    const [ toggle, setToggle ] = useState(true)

    function toggleTable() {
        setToggle(!toggle); 
    }
    
    let tableData = scheduled.map((obj) => {
        return (
            <tr key={obj.index}>
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
            <div className="scheduled-fights">
                <div onClick={toggleTable} className="table-header">
                    <h2>Scheduled Fights</h2>
                    <div className="expand-icon">
                        <ExpandMoreIcon/>
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
                                    TIME
                                </th>
                                <th>
                                    EVENT
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    const notClicked = () => {
        return (
            <div className="scheduled-fights">
                <div onClick={toggleTable} className="table-header">
                    <h2>Scheduled Fights</h2>
                    <div className="expand-icon">
                        <ExpandMoreIcon/>
                    </div>
                </div>
            </div>
        )
    }

    return toggle? clicked() : notClicked();
}

export default Scheduled;