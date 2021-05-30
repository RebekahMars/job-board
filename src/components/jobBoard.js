import React, {useEffect, useState} from "react";
import FetchData from "./fetchData";


const JobBoard = () =>{

        let data = FetchData();


    return (
     <div>
         {data.map((job) => {

             {console.log(job)}
         return <div>{job.name}</div>
         })}
        </div>
		
    )
}

export default JobBoard;