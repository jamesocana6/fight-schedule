import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Past = ({ past }) => {
    // console.log(past)
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
    return (
        <div className="past-fights">
            <div className="table-header">
                <h2>Past Fights This Year</h2>
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

export default Past;