import React,{useState, useEffect} from "react";
import fetchJobData from "./fetchJobData";
import fetchSkillData from "./fetchSkillsData"
import JobBoard from "./jobBoard.js";
import SkillBoard from "./skillBoard.js";
import HiringPage from "./jobHiringList.js";
import SkillList from "./skillList.js";

const JobPage = () => {
    const [searchJobTerm, setSearchJobTerm] = useState("");
    const [searchSkillTerm, setSearchSkillTerm] = useState("");
    const [jobData, setJobData] = useState([]);
    const [jobSkills, setJobSkills] = useState([]);
    const [selectedJobs, setSelectedJobs] = useState([]);
    const [selectedSkills, setSelectedSkills] = useState([]);

    /**
    | * Order of events.
    | * --------------
    | * useEffect func fires in jobPage. sets JobData based on input from user.
    | * jobData is passed to JobBoard, through the form of props.
    | * jobData is being mapped in jobBoard
    | * if() a mapped div is clicked. The toggleSelected jobs func is called with a job
    | * 
    | * How do we make a copy of the array we need to save.
    | * 1) with the job the was clicked
    | * 2) with the array of currently selected jobs
    | * 
    | * Make the copy of selected jobs.
    | * set a new copy of selectedjobs with the new copy of both the old state and the new job
    | * 
    | * The darkest night comes before the brightest dawn yo lol-Bookah
     */

    useEffect(()=>{
        (async ()=>{
           let jobResponse = await fetchJobData(searchJobTerm);
           setJobData(jobResponse);
        })()
    },[searchJobTerm]);

    useEffect(()=>{
        (async ()=>{
           let skillResponse = await fetchSkillData(searchSkillTerm);
           setJobSkills(skillResponse);
        })()
    },[searchSkillTerm]);

   /*  const searchSkillFunction = event => {
        setSearchSkillTerm(event.target.value);
    } */

   /*  const filterSelectedJobs = () => {
        return jobData.filter(job => job.selected);
    } */

/*     const searchJobFunction = event => {
        setSearchJobTerm(event.target.value);
    }
 */
    return(
        <>
        <div>
            <h1>Job Board</h1>
            <label> Search Jobs:
            <input type="text" onChange={(event)=> setSearchJobTerm(event.target.value)}/>
            </label>
            <JobBoard jobData={jobData} selectedJobs={selectedJobs} setSelectedJobs={setSelectedJobs}/>  
        </div>
        <div>
            <h1>Skill Board</h1>
            <label>Search Skills:
            <input type="text" onChange={(event)=> setSearchSkillTerm(event.target.value)}/>
            </label>
            <SkillBoard jobSkills ={jobSkills} selectedSkills={selectedSkills} setSelectedSkills={setSelectedSkills}/>
        </div>
        <div>
            <HiringPage data={selectedJobs}/>
        </div>
        <div>
            <SkillList skills={selectedSkills}/>
        </div>
        </>
    ) 

    
}
export default JobPage;