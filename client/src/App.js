import React from 'react';
import './App.css';
import Jobs from './Jobs';

const mockJobs = [
  { title: 'Junior React Developer', company: "DAZN" },
  { title: 'Junior Full Stack Developer', company: "ClearScore" },
  { title: 'Junior Java Developer', company: "Amazon" }
]

function App() {
  return (
    <div className="App">
      <Jobs jobs={mockJobs} />
    </div>
  );
}

export default App;
