import React, {useEffect, useState} from "react";
import fetchData from "./fetchData";


const JobBoard = (props) =>{
    const [data, setData] = useState([]);

    useEffect(()=>{
        (async ()=>{
           let response = await fetchData(props.searchTerm);
           setData(response);
        })()
    },[props.searchTerm]);

    return (
     <div>
         {data.map((job, i) => {
         return <div key={i}>{job.name}</div>
         })}
        </div>
		
    )
}

export default JobBoard;