import React from "react";

const Upcoming = ({ upcoming }) => {
    let table = upcoming.map((obj) => {
        return (
            <tr key={obj.index}>
                <td>
                    {obj["org"]}
                </td>
                <td>
                    {obj["1"]}
                </td>
                <td>
                    {obj["2"]}
                </td>
                <td>
                    <a href={obj["5"]} target="_blank">{obj["4"]}</a>
                </td>
            </tr>
        )
    })
    return (
        <>
        <h2>Upcoming Fights</h2>
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
        </>
    )
}

export default Upcoming;