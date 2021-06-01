import './App.css';
import React from 'react';
import JobPage from "./components/jobPage";

function App() {
  return (
    <>
    <h1 className="app-title">Empire Job Board</h1>
    <div className="App">
      <JobPage></JobPage>
    </div>
    </>
  );
}

export default App;
