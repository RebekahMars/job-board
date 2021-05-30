import React,{useState} from "react";
import JobBoard from "./jobBoard.js";

const JobPage = () => {
    const [searchTerm, setSearchTerm] = useState("python"); 
    

    return <JobBoard searchTerm={searchTerm}/>
}
export default JobPage;