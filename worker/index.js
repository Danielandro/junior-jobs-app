const CronJob = require('cron').CronJob;

new CronJob('*/10 * * * * *', function () {
  console.log('You will see this message every 10 second');
}, null, true, 'America/Los_Angeles');

// Every Hour Cron Schedule Expression
// 0 */1 * * *

// Every minute
// */1 * * * *