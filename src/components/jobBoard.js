import FetchData from "./fetchData";

function JobBoard()
{
    return (
        <h1>{FetchData.name}</h1> //map array to <Job>, make each element--> like list data using map
		
    )
}

export default JobBoard;