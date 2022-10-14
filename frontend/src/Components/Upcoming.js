import React from "react";

const Upcoming = ({ upcoming }) => {
    let table = upcoming.map((obj) => {
        return (
            <tr key={obj.index}>
                <td>
                    {obj["1"]}
                </td>
                <td>
                    {obj["2"]}
                </td>
                <td>
                    {obj["4"]}
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