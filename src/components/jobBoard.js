import React from "react"; 
//import fetchJobData from "./fetchJobData";
//import styled from 'styled-components';

/* const Container = styled.div`
${props => props.selected === "light-grey"}
`  */

const JobBoard = (props) =>{
   
    /* const [jobData, setJobData] = useState([]);

    useEffect(()=>{
        (async ()=>{
           let jobResponse = await fetchJobData(props.searchJobTerm);
           setJobData(jobResponse);
        })()
    },[props.searchJobTerm]);

    const filterSelectedJobs = () => {
        return jobData.filter(job => job.selected);
    }
 */
    const toggleSelectedJobs = job => {
        let jobs = [...props.selectedJobs, job];
        let total = props.selectedJobs.length;
        props.setSelectedJobs(jobs);
        props.setJobCount(total);
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