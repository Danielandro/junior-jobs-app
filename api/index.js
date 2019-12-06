const express = require('express');
const app = express();
const redis = require('redis');
const client = redis.createClient();
const { promisify } = require('util');
const getAsync = promisify(client.get).bind(client);

app.get('/jobs', async (req, res) => {
  const jobs = await getAsync('github');
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  return res.send(jobs);
})

app.listen(3001, () => console.log('Listening on port 3001'));
