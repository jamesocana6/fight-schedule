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
        <h2>Scheduled Fights</h2>
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

export default Scheduled;