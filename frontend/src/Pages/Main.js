import React from "react";

const Main = ({state}) => {
    let table = state[0].map((obj)=> {
        return (
            // console.log(obj)
            <tr>
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
    const loaded = () => {
        return (
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

        )
    }
    const loading = () => {
        return (
            <><h1>Loading...</h1></>
        )
    }
    return state ? loaded() : loading();
}

export default Main;