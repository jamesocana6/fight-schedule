import React from "react";

const Past = ({ past }) => {
    // console.log(past)
    let table = past.map((obj) => {
        return (
            <tr key={obj.index}>
                <td>
                    {obj["1"]}
                </td>
                <td>
                    {obj["2"]}
                </td>
            </tr>
        )
    })
    return (
        <>
        <h2>Past Fights This Year</h2>
            <table>
                <thead>
                    <tr>
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
        </>
    )
}

export default Past;