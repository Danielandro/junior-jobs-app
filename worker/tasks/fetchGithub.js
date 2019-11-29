const fetch = require('node-fetch');

const allJobs = [];
const baseUrl = "https://jobs.github.com/positions.json?page=1&description=javascript";

async function fetchGithub() {
  let jobs = await fetch(baseUrl)
    .then(res => res.json());
  console.log(jobs.length);
}

fetchGithub();
module.exports = fetchGithub;