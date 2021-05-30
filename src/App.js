import './App.css';
import React from 'react';
import JobPage from "./components/jobPage";
import SkillPage from "./components/skillPage"

//import {useState, useEffect} from "react";

function App() {
  
  //const[jobBoard, setJobBoard] = useState()

  return (
    <div className="App">
      <JobPage></JobPage>
      <SkillPage></SkillPage>
    </div>
  );
}

export default App;
