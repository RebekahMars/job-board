import React from "react";
//import fetchSkillData from "./fetchSkillsData.js";

const SkillBoard = (props) => {
   /*  const [jobSkills, setJobSkills] = useState([]);

    useEffect(()=>{
        (async ()=>{
           let skillResponse = await fetchSkillData(props.searchSkillTerm);
           setJobSkills(skillResponse);
        })()
    },[props.searchSkillTerm]); */

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