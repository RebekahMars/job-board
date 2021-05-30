import FetchData from "./fetchData";
import jwt from "jsonwebtoken";
import {useEffect, useState} from "react";

// this token gets you access to almost all of Emsi's jpa data
const getToken = () => jwt.sign({
  exp: (() => Math.floor(Date.now() / 1000) + 60)(),
  "iss": "learn-web-dev-camper-key"
}, "web-dev-camper-secret");

// Feel free to call a state setter instead of a console log
/* const FetchData = () => {
  
	useEffect(() => {
		fetch("https://emsiservices.com/emsi-open-proxy-service/postings/us/taxonomies/skills?q=metal&limit=50", {
		  headers: {
		    "Content-Type": "application/json",      
		    authorization: `Bearer ${getToken()}`,
		  },
		}).then(res => res.json()).then(res => console.log(res))
	}, [])

	return null;
}
 */
const JobBoard = ({jobBoardData}) =>{
    const[jobData, setJobData] = FetchData();

    return (
        <div></div>
       /*  <div>
            {jobBoardData.map((job) => (
                <div>{job.data.name}</div>
            ))}
        </div> //map array to <Job>, make each element--> like list data using map */
		
    )
}

export default JobBoard;