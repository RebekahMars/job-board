import './App.css';
import React from 'react';
import JobBoard from "./components/jobBoard";

import {useState, useEffect} from "react";

function App() {
  
  //const[jobBoard, setJobBoard] = useState()

  return (
    <div className="App">
      <JobBoard></JobBoard>
    </div>
  );
}

export default App;
