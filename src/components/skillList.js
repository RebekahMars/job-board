import React from "react";

const SkillList = (props) => {
    return (
        <>
        <div>
            <h1>In-Demand Skills</h1>
            <p>Count: {props.skills.length}</p>
            {props.skills && props.skills.map((selected, index) =>{
            return <div key={index}>{selected.name}</div>
            })}
        </div>
        </>
    )
}
export default SkillList;