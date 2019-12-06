const express = require('express');
const app = express();
const redis = require('redis');
const client = redis.createClient();
const { promisify } = require('util');
const getAsync = promisify(client.get).bind(client);

app.get('/jobs', async (req, res) => {
  const jobs = await getAsync('github');
  return res.send(jobs);
})

app.listen(3000, () => console.log('Listening on port 3000'));
