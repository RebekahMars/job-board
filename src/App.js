import './App.css';
import JobBoard from "./components/jobBoard"
import FetchData from"./components/fetchData"

import {useState, useEffect} from "react";

function App() {
  
  FetchData();
  const[jobBoard, setJobBoard] = useState([])

  return (
    <div className="App">
      <JobBoard></JobBoard>
    </div>
  );
}

export default App;
