import React, {useEffect, useState} from "react";
import fetchJobData from "./fetchJobData";

const JobBoard = (props) =>{
    const [jobData, setJobData] = useState([]);

    useEffect(()=>{
        (async ()=>{
           let jobResponse = await fetchJobData(props.searchJobTerm);
           setJobData(jobResponse);
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