import React from "react";

const SkillBoard = (props) => {

    const toggleSelectedSkills = skill => {
        let skills = [...props.selectedSkills, skill];
        props.setSelectedSkills(skills);
    }

    return (
        <div>
        {props.jobSkills && props.jobSkills.map((skill, i)=> {
            return <div key={i} onClick={()=>toggleSelectedSkills(skill)}>{skill.name}</div>
        })}
        </div>
    )
}
export default SkillBoard;