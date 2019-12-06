<h1 align="center">Junior Dev Jobs :computer: :briefcase: :pound:</h1>
<p>
  <img src="https://img.shields.io/badge/npm-v6.9.0-blue" />

  <img src="https://img.shields.io/badge/node.js-v10.17.0-green.svg" />

  <a href="https://github.com/Danielandro/java-calculator/graphs/commit-activity" target="_blank">
  </a>

  <a href="https://github.com/Danielandro/java-calculator/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/Danielandro/java-calculator" />
  </a>
</p>

> Junior Developer Job Aggregator App

## Aim

Build an application that grabs junior developer jobs from open source APIs and puts them all in one place. 


## Tech Stack

- React (Front-End)
- Node.js (Back-End)
- Express (API)
- Redis (Cache)
- Cron Worker

## Prerequisites

- Redis 

1. Visit the [Redis homepage](https://redis.io/) and install the latest version
2. Start redis-server in console using the command `redis-server /usr/local/etc/redis.conf`

## Install

Clone the project

`npm  i` to install the dependencies


## Usage

To use the app, there are **three steps**:

**1.** Fetch the jobs & store in redis:

- From the project folder, type in the command line `node ./worker/index`

- This will fetch jobs from the Github jobs API every minute. To terminate press `ctrl + c`

**2.** Start the server 

- Open another terminal and enter `node ./api/index`. 

- This will start the server on port 3001. To terminate press `ctrl + c`

**3.** Start the application

- Open another instance of the terminal and enter `cd client`

- Enter `npm i` to install the dependencies.

- Enter `npm run start` to start the app on port 3000

- Go to your browser and navigate to `http://localhost:3000`


## Author

👤 **Danny Ajilore**

- Github: [Danielandro](https://github.com/Danielandro)
- LinkedIn: [Daniel Ajilore](https://www.linkedin.com/in/daniel-ajilore-78029b16/)

## 📝 License

Copyright © 2019 [Daniel Ajilore](https://github.com/Danielandro).<br />

This project is [MIT](https://github.com/Danielandro/junior-jobs-app/blob/master/LICENSE) licensed.

---
