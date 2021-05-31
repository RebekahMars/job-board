import React,{useState} from "react";
import JobBoard from "./jobBoard.js";

const JobPage = () => {
    const [searchJobTerm, setSearchJobTerm] = useState("");
    
    const searchJobFunction = event => {
        setSearchJobTerm(event.target.value);
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
        </>
    ) 

    
}
export default JobPage;