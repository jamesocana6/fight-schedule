import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Scheduled = ({ scheduled }) => {
    // console.log(scheduled)
    let table = scheduled.map((obj) => {
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
    return (
        <div className="scheduled-fights">
            <div className="table-header">
                <h2>Scheduled Fights</h2>
                <ExpandMoreIcon/>
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
                        {table}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Scheduled;