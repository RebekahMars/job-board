import React,{useState, useEffect}from "react";
import JobBoard from "./jobBoard";

const HiringPage = ({jobData}) => {
    const[selectedJobs, setSelectedJobs] = useState(); //come back to this later
    //setSelectedJobs to be === to the selectedJobs from JobBoard
    //update dynamically
    
    return (
        <>
        <div>
            <h1>In-Demand Jobs</h1>
            <JobBoard selectedJobs={selectedJobs} setSelectedJobs={jobData}/>
        </div>
        </>
    )
}
export default HiringPage;