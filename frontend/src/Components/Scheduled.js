import React from "react";

const Scheduled = ({ scheduled }) => {
    // console.log(scheduled)
    let table = scheduled.map((obj) => {
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
        <h2>Scheduled Fights</h2>
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

export default Scheduled;