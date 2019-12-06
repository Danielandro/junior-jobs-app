import React, { useEffect, useState } from 'react';
import './App.css';
import Jobs from './Jobs';

const mockJobs = [
  { title: 'Junior React Developer', company: "DAZN" },
  { title: 'Junior Full Stack Developer', company: "ClearScore" },
  { title: 'Junior Java Developer', company: "Amazon" }
]

const jobApiUrl = 'http://localhost:3001/jobs';
const fetchJobs = async () => {
  const res = await fetch(jobApiUrl);
  const json = await res.json();

  console.log({ json });
}

function App() {
  const [jobList, updateJobs] = useState([])
  useEffect(() => {
    fetchJobs();
  }, [])

  return (
    <div className="App">
      <Jobs jobs={jobList} />
    </div>
  );
}

export default App;
