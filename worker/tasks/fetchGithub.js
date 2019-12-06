const fetch = require('node-fetch');
const redis = require('redis');
const client = redis.createClient();
const { promisify } = require('util');
const setAsync = promisify(client.set).bind(client);

const allJobs = []; // job results
const baseUrl = "https://jobs.github.com/positions.json?description=javascript&page="; // github jobs API

// fetch jobs from each results page
async function fetchGithub() {
  let pageNumber = 0;
  let numOfJobs = 1;

  console.log("Fetching Github...")

  while (numOfJobs !== 0) {
    const res = await fetch(`${baseUrl}${pageNumber}`)
    const foundJobs = await res.json();

    numOfJobs = foundJobs.length;
    allJobs.push(...foundJobs);
    console.log(`${numOfJobs} jobs`);
    pageNumber++;
  }

  console.log(`Total number of jobs found: ${allJobs.length}`);
  // store jobs in redis 
  client.on("error", (err) => {
    console.log(`Error ${err}`)
  })

  const success = await setAsync('github', JSON.stringify(allJobs));
  console.log({ success });

}

module.exports = fetchGithub;
