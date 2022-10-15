import React from "react";

const Past = ({ past }) => {
    // console.log(past)
    let table = past.map((obj) => {
        return (
            <tr key={obj.index}>
                <td>
                    {obj["org"]}
                </td>
                <td>
                    {obj["1"]}
                </td>
                <td>
                    <a href={obj["5"]} target="_blank">{obj["2"]}</a>
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
        </>
    )
}

export default Past;