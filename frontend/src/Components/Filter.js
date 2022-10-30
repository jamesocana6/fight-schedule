import React from "react";
import $ from "jquery";

const Filter = ({ setUnselectedOrgs }) => {

    const unselectedOrgs = []
    const allInputs = $("input")

    const handleOnClick = (event) => {
        if (event.target.type === "checkbox") {
            for (let input of allInputs) {
                if (!input.checked) {
                    unselectedOrgs.push(input.value)
                }
            }
            setUnselectedOrgs(unselectedOrgs)
        }
    }

    return (
        <div className="filter-form">
            Filter by Organization:
            <form onClick={handleOnClick}>
                <label>UFC <input className="filterBox" type="checkbox" value="UFC" name="UFC" defaultChecked={true}/> </label>
                <label>Boxing <input className="filterBox" type="checkbox" value="Boxing" name="Boxing" defaultChecked={true}/> </label>
                <label>ONE <input className="filterBox" type="checkbox" value="ONE" name="ONE" defaultChecked={true}/> </label>
                <label>Bellator <input className="filterBox" type="checkbox" value="Bellator" name="Bellator" defaultChecked={true}/> </label>
                <label>PFL <input className="filterBox" type="checkbox" value="PFL" name="PFL" defaultChecked={true}/> </label> <br/>
            </form>

            <p className="message">Click the star to highlight the fight.</p>
        </div>
    )
}

export default Filter;