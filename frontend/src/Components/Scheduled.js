import React from "react";

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
            <h2>Scheduled Fights</h2>
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
                                TIME (ET)
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