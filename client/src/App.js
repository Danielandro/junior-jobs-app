import React, { useEffect, useState } from 'react';
import './App.css';
import Jobs from './Jobs';

const jobApiUrl = 'http://localhost:3001/jobs';
const fetchJobs = async (updateCallback) => {
  const res = await fetch(jobApiUrl);
  const json = await res.json();
  updateCallback(json);
}

function App() {
  const [jobList, updateJobs] = useState([])
  useEffect(() => {
    fetchJobs(updateJobs);
  }, [])

  return (
    <div className="App">
      <Jobs jobs={jobList} />
    </div>
  );
}

export default App;
