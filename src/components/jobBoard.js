import React, {useEffect, useState} from "react";
import fetchJobData from "./fetchJobData";
//import styled from 'styled-components';

/* const Container = styled.div`
${props => props.selected === "light-grey"}
`  */

const JobBoard = (props) =>{
    const [jobData, setJobData] = useState([]);

    useEffect(()=>{
        (async ()=>{
           let jobResponse = await fetchJobData(props.searchJobTerm);
           setJobData(jobResponse);
        })()
    },[props.searchJobTerm]);

    const filterSelectedJobs = () => {
        return jobData.filter(job => job.selected);
    }

    const toggleSelectedJobs = job => {
        job.selected = !job.selected;
        filterSelectedJobs();

    }

    return (
    <>
    <div>
        {jobData.map((job, index) => {
            return <div key={index} onClick={()=>toggleSelectedJobs(job)}>{job.name}</div>
            })}
    </div>
    </>
		
    )
}

export default JobBoard;