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

    useEffect(()=>{
        (async ()=>{
           let jobResponse = await fetchJobData(searchJobTerm);
           if(isGrowing(jobData.length, jobResponse.length))
           {
               document.getElementById("jobCount").style.color="green";
           }
           else
           {
               document.getElementById("jobCount").style.color ="red";
           }
           setJobData(jobResponse);
        })()
    },[searchJobTerm]);

    useEffect(()=>{
        (async ()=>{
           let skillResponse = await fetchSkillData(searchSkillTerm);
           if(isGrowing(jobSkills.length, skillResponse.length))
           {
               document.getElementById("skillCount").style.color="green";
           }
           else
           {
               document.getElementById("skillCount").style.color ="red";
           }
           setJobSkills(skillResponse);
        })()
    },[searchSkillTerm]);

    const isGrowing = (oldCount, newCount) => {
        if(oldCount > newCount)
        {
            return false
        }
        else
        {
            return true
        }
  
    }

    return(
        <>
        <div>
            <h1>Job Search</h1>
            <label> Search Jobs:
            <input type="text" onChange={(event)=> setSearchJobTerm(event.target.value)}/>
            </label>
            <JobBoard jobData={jobData} selectedJobs={selectedJobs} setSelectedJobs={setSelectedJobs}/>  
        </div>
        <div>
            <h1>Skill Search</h1>
            <label>Search Skills:
            <input type="text" onChange={(event)=> setSearchSkillTerm(event.target.value)}/>
            </label>
            <SkillBoard jobSkills ={jobSkills} selectedSkills={selectedSkills} setSelectedSkills={setSelectedSkills}/>
        </div>
        <div>
            <HiringPage data={selectedJobs} count={jobData.length}/>
        </div>
        <div>
            <SkillList skills={selectedSkills}/>
        </div>
        </>
    ) 

    
}
export default JobPage;