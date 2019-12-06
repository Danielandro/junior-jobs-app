const fetch = require('node-fetch');
const redis = require('redis');
const client = redis.createClient();
const { promisify } = require('util');
const setAsync = promisify(client.set).bind(client);

const baseUrl = 'https://jobs.github.com/positions.json?description=javascript&page='; // github jobs API

async function fetchGithub() {
  const allJobs = []; // job results
  let pageNumber = 0;
  let numOfJobs = 1;

  console.log('Fetching Github...')

  // fetch all jobs from each results page
  while (numOfJobs !== 0) {
    const res = await fetch(`${baseUrl}${pageNumber}`)
    const foundJobs = await res.json();

    numOfJobs = foundJobs.length;
    allJobs.push(...foundJobs);
    console.log(`${numOfJobs} jobs`);
    pageNumber++;
  }

  console.log(`Total number of jobs found: ${allJobs.length}`);

  // filter jobs
  const jrJobs = allJobs.filter(job => {
    const jobTitle = job.title.toLowerCase();

    if (
      jobTitle.includes('senior') ||
      jobTitle.includes('lead') ||
      jobTitle.includes('architect') ||
      jobTitle.includes('sr.')
    ) {
      return false
    }

    return true
  })

  console.log(`Number of junior jobs found: ${jrJobs.length} `)

  // store jobs in redis   
  client.on('error', (err) => {
    console.log(`Error ${err}`)
  })

  const success = await setAsync('github', JSON.stringify(jrJobs));
  console.log({ success });

}

module.exports = fetchGithub;
