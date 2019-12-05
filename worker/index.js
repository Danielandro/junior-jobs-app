const CronJob = require('cron').CronJob;
const GithubJobs = require('./tasks/fetchGithub');

new CronJob('*/10 * * * * *', GithubJobs(),
  null, true, 'Europe/London');

// Every Hour Cron Schedule Expression
// 0 */1 * * *

// Every minute
// */1 * * * *

// Every 10 minutes
// */10 * * * * *