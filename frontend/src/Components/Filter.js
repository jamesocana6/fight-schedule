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
        <div>
            <form onClick={handleOnClick}>
                UFC <input className="filterBox" type="checkbox" value="UFC" defaultChecked={true}/>
                Boxing <input className="filterBox" type="checkbox" value="Boxing" defaultChecked={true}/>
                ONE <input className="filterBox" type="checkbox" value="ONE" defaultChecked={true}/>
                Bellator <input className="filterBox" type="checkbox" value="Bellator" defaultChecked={true}/>
                PFL <input className="filterBox" type="checkbox" value="PFL" defaultChecked={true}/>
            </form>
        </div>
    )
}

export default Filter;