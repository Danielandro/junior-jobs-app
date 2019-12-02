const fetch = require('node-fetch');

const allJobs = []; // job results
const baseUrl = "https://jobs.github.com/positions.json?description=javascript&page="; // github jobs API
let pageNumber = 0; // results page
let numOfJobs = 1;

/*
- send fetch request to first page (page 0) x
- get back results -> array of job objects x
- add results to allJobs x
- print how many jobs found e.g 50 jobs found x
- send request to next page (page 1)
- keep going until a page returns no results 
- print total number of jobs found
*/

async function fetchGithub() {
  while (numOfJobs !== 0) {
    let foundJobs = await fetch(`${baseUrl}${pageNumber}`)
      .then(res => res.json());
    numOfJobs = foundJobs.length;
    allJobs.push(...foundJobs);
    console.log(`${numOfJobs} jobs`);
    pageNumber++;
  }

  console.log(`Total number of jobs found: ${allJobs.length}`);
}

module.exports = fetchGithub;