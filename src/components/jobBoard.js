import React from "react"; 


const JobBoard = (props) =>{
   
    const toggleSelectedJobs = job => {
        let jobs = [...props.selectedJobs, job];
        props.setSelectedJobs(jobs);
    }

    return (
    <>
    <div>
        {props.jobData && props.jobData.map((job, index) => {
            return <div key={index} onClick={()=>toggleSelectedJobs(job)}>{job.name}</div>
            })}
    </div>
    </>
		
    )
}

export default JobBoard;