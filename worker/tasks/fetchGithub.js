const fetch = require('node-fetch');

const allJobs = []; // job results
const baseUrl = "https://jobs.github.com/positions.json?description=javascript&page="; // github jobs API

async function fetchGithub() {
  let pageNumber = 0; // results page
  let numOfJobs = 1;

  while (numOfJobs !== 0) {
    const res = await fetch(`${baseUrl}${pageNumber}`)
    const foundJobs = await res.json();

    numOfJobs = foundJobs.length;
    allJobs.push(...foundJobs);
    console.log(`${numOfJobs} jobs`);
    pageNumber++;
  }

  console.log(`Total number of jobs found: ${allJobs.length}`);

}

module.exports = fetchGithub;
