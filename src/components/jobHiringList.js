import React from "react";


const HiringPage = (props) => { 
    return (
        <>
        <div>
            <h1>In-Demand Jobs</h1>
            {props.data && props.data.map((selected, index) => {
                return <div key={index}>{selected.name}</div>
            })}
        </div>
        </>
    )
}
export default HiringPage;