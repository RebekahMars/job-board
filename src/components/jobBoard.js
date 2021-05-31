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

    const filterSelected = () => {
        return jobData.filter(job => job.selected);
    }
    const toggleSelect = job => {
        job.selected = !job.selected;
        filterSelected();
    }

    return (
    <>
    <div>
        {jobData.map((job, index) => {
            return <div key={index} onClick={()=>toggleSelect(job)}>{job.name}</div>
            })}
    </div>
    </>
		
    )
}

export default JobBoard;