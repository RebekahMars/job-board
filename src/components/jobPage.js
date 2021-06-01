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
    const [jobCount, setJobCount] = useState([]);

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

    return(
        <>
        <div>
            <h1>Job Search</h1>
            <label> Search Jobs:
            <input type="text" onChange={(event)=> setSearchJobTerm(event.target.value)}/>
            </label>
            <JobBoard jobData={jobData} selectedJobs={selectedJobs} setSelectedJobs={setSelectedJobs} setJobCount={setJobCount}/>  
        </div>
        <div>
            <h1>Skill Search</h1>
            <label>Search Skills:
            <input type="text" onChange={(event)=> setSearchSkillTerm(event.target.value)}/>
            </label>
            <SkillBoard jobSkills ={jobSkills} selectedSkills={selectedSkills} setSelectedSkills={setSelectedSkills}/>
        </div>
        <div>
            <HiringPage data={selectedJobs} count={jobCount}/>
        </div>
        <div>
            <SkillList skills={selectedSkills}/>
        </div>
        </>
    ) 

    
}
export default JobPage;