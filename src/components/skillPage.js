import React,{useState} from "react";
import SkillBoard from "./skillBoard.js"
import fetchSkillData from "./fetchSkillsData.js";

const SkillPage = () => {
    const [searchSkillTerm] = useState("");

    return (
        <div>
            <h1>Skills Board</h1>
            <label>Search Skills:
                <input type="text" value={searchSkillTerm} onChange={searchSkillFunction}></input>
            </label>
            <SkillBoard searchSkillTerm={searchSkillTerm}/> 
        </div> 
    )
}
export default SkillPage;