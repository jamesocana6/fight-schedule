import React from "react";

const Filter = ({ setUnselectedOrgs }) => {

    const unselectedOrgs = []

    const handleOnClick = (event) => {
        if (event.target.type === "checkbox") {
            if (!event.target.checked) {
                unselectedOrgs.push(event.target.value)
            } else if (event.target.checked) {
                unselectedOrgs.splice(unselectedOrgs.indexOf(event.target.value),1)
            }
        }
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        if (event.target.type === "submit") {
            setUnselectedOrgs(unselectedOrgs)
        }
    }

    return (
        <div>
            <form onClick={handleOnClick}>
                UFC <input type="checkbox" value="UFC" defaultChecked={true}/>
                Boxing <input type="checkbox" value="Boxing" defaultChecked={true}/>
                ONE <input type="checkbox" value="ONE" defaultChecked={true}/>
                Bellator <input type="checkbox" value="Bellator" defaultChecked={true}/>
                PFL <input type="checkbox" value="PFL" defaultChecked={true}/>
            </form>
            <input onClick={handleSubmit} type="submit" value="Filter"/>
        </div>
    )
}

export default Filter;