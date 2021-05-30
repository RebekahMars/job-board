import './App.css';
import JobBoard from "./components/jobBoard"
import FetchData from"./components/fetchData"

import {useState, useEffect} from "react";

function App() {
  
  const[jobBoard, setJobBoard] = useState([])

  return (
    <div className="App">
      <FetchData jobBoard={jobBoard}></FetchData>
    </div>
  );
}

export default App;
