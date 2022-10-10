import React from "react";

const Upcoming = ({ upcoming }) => {
    console.log(upcoming)
    let table = upcoming.map((obj) => {
        return (
            <tr key={obj.idx}>
                <td>
                    {obj.date}
                </td>
                <td>
                    {obj.time}
                </td>
                <td>
                    {obj.event}
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
        </>
    )
}

export default Upcoming;