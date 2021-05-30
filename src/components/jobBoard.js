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

    return (
    <>
    <div>
        {jobData.map((job, i) => {
            return <div key={i}>{job.name}</div>
            })}
    </div>
    </>
		
    )
}

export default JobBoard;