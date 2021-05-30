import React, {useEffect, useState} from "react";
import fetchSkillData from "./fetchSkillsData";

const SkillBoard = (props) => {
    const [jobSkills, setJobSkills] = useState([]);

    useEffect(()=>{
        (async ()=>{
           let skillResponse = await fetchSkillData(props.searchSkillTerm);
           setJobSkills(skillResponse);
           console.log(jobSkills);
        })()
    },[props.searchSkillTerm]);

    return (
        <div>
        {jobSkills.map((skill, i)=> {
            return <div key={i}>{skill.name}</div>
        })}
        </div>
    )
}
export default SkillBoard;