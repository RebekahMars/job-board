import React, {useEffect, useState} from "react";
import fetchJobData from "./fetchJobData";
import fetchSkillData from "./fetchSkillsData";

const JobBoard = (props) =>{
    const [jobData, setJobData] = useState([]);
    const [jobSkills, setJobSkills] = useState([]);

    useEffect(()=>{
        (async ()=>{
           let jobResponse = await fetchJobData(props.searchJobTerm);
           setJobData(jobResponse);
           console.log(jobData);
        })()
    },[props.searchJobTerm]);

    useEffect(()=>{
        (async ()=>{
           let skillResponse = await fetchSkillData(props.searchSkillTerm);
           setJobSkills(skillResponse);
           console.log(jobSkills);
        })()
    },[props.searchSkillTerm]);

    return (
    <>
    <div>
        {jobData.map((job, i) => {
            return <div key={i}>{job.name}</div>
            })}
    </div>
    <div>
        {jobSkills.map((skill, i)=> {
            return <div key={i}>{skill.name}</div>
        })}
    </div>
    </>
		
    )
}

export default JobBoard;