import React,{useState} from "react";
import JobBoard from "./jobBoard.js";

const JobPage = () => {
    const [searchTerm, setSearchTerm] = useState(""); 
    
    const searchFunction = event => {
        setSearchTerm(event.target.value);
    }
    return(
        <div>
        <label> Search:
        <input type="text" value={searchTerm} onChange={searchFunction}/>
        </label>
        <JobBoard searchTerm={searchTerm}/>  
        </div>

    ) 

    
}
export default JobPage;