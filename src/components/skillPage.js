import React,{useState} from "react";
import SkillBoard from "./skillBoard.js"

const SkillPage = () => {
    const [searchSkillTerm, setSearchSkillTerm] = useState(""); 

    const searchSkillFunction = event => {
        setSearchSkillTerm(event.target.value);
    }

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