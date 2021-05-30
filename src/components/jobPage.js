import React,{useState} from "react";
import JobBoard from "./jobBoard.js";

const JobPage = () => {
    const [searchJobTerm, setSearchJobTerm] = useState("");
    const [searchSkillTerm, setSearchSkillTerm] = useState(""); 
    
    const searchJobFunction = event => {
        setSearchJobTerm(event.target.value);
    }
    const searchSkillFunction = event => {
        setSearchSkillTerm(event.target.value);
    }
    return(
        <>
        <div>
            <h1>Job Board</h1>
            <label> Search Jobs:
            <input type="text" value={searchJobTerm} onChange={searchJobFunction}/>
            </label>
            <JobBoard searchJobTerm={searchJobTerm}/>  
        </div>
        <div>
            <h1>Skills Board</h1>
            <label>Search Skills:
                <input type="text" value={searchSkillTerm} onChange={searchSkillFunction}></input>
            </label>
            <JobBoard searchSkillTerm={searchSkillTerm}/> 
        </div>
        </>
    ) 

    
}
export default JobPage;