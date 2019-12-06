import React, { useEffect, useState } from 'react';
import './App.css';
import Jobs from './Jobs';

function App() {
  const jobApiUrl = 'http://localhost:3001/jobs';
  const [jobs, updateJobs] = useState([]);
  const fetchJobs = async () => {
    const res = await fetch(jobApiUrl);
    const json = await res.json();
    updateJobs(json);
  }

  // runs on initial page load
  useEffect(() => {
    fetchJobs();
  }, [])

  return (
    <div className="App">
      <Jobs jobs={jobs} />
    </div>
  );
}

export default App;
