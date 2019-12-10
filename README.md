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

Build an application that grabs junior developer jobs from open source APIs and puts them all in one place. The first API used is Github jobs as it's has open and easy to use.

The main aim was to explore a few new concepts (in-memory data structure, cron workers).

![cron worker started in the terminal](/screenshots/app-screenshot-1.png)

## Tech Stack

- React (Front-End)
- Node.js (Back-End)
- Express (API)
- Redis (Cache)
- Cron Worker

## Prerequisites

- Redis

## Install

Clone the project

`npm install` to install the dependencies

Visit the [Redis homepage](https://redis.io/) and install the latest version

Start redis-server in console using the command `redis-server /usr/local/etc/redis.conf`

## Usage

To use the app, there are **three steps**:

**1.** Fetch the jobs & store in redis:

- From the project folder, type in the command line `node ./worker/index`

- This will fetch jobs from the Github jobs API every minute. To terminate press `ctrl + c`

![cron worker has been started in the terminal](/screenshots/start-fetching-github-jobs.png)

**2.** Start the server

- Open another terminal and enter `node ./api/index`.

- This will start the server on port 3001. To terminate press `ctrl + c`

![API has been started in the terminal](/screenshots/start-api-server.png)

**3.** Start the application

- Open another instance of the terminal and enter `cd client`

- Enter `npm install` to install the dependencies.

- Enter `npm run start` to start the app on port 3000

- Go to your browser and navigate to `http://localhost:3000`

![Application has been started in the terminal](/screenshots/start-client.png)

## Approach

![Diagram of application structure](/screenshots/app-diagram.png)

1. I started by creating a diagram (as above) of how the different elements needed to interact with eachother and how the data would flow.

2. I bootstrapped the client using create-react-app, structuring it as a single page application. Only one route is required and any future features such as filtering by certain attributes can be achieved by updating the state and re-rendering the page. I defined some mock job data based on the JSON returned by the Github jobs API, and set this as the initial state with the top level `App` component.

3. Passing this data down, utilising the one-way data flow of React, I defined the child components (Jobs & Job) to render each result. I also utilised some components of the Material-UI library to define some basic styling using CSS-in-JS. I could have gone with plain CSS or a pre-processor like SASS, but I wanted to experiment.

4. Next, I created the cron worker and the module that calls the Github jobs API. I used a modular and functional structure as I feel it opens the opportunity to for extending the project using other APIs and makes it easily readable. Once thing I could change, would be to separate out the saving of the data to redis into a separate module. This would provide better adherance to single responsibility for each module, and encourage reusability.

5. I then defined a simple API using express, with a single endpoint `/jobs` that returned the job data from the database. In order to allow the endpoint to be accessed by the client from a different domain, had to define a `access-control-allow-origin` header on the server response.

6. The final step was to call the API from the client and set the state on the App component. I used the `useState` & `useEffect` hooks to call the API and set the state when App mounts (i.e. on page load). I chose to utilise ES6 and React hooks, as the are both modern implementations that are currently well supported.

## Final thoughts

- Some listings are returned multiple times which means the idea of using the job id as a unique key for each child doesn't work. This can be resolved by filtering the results to remove duplicate lisiting before saving to database.

- This project was an exploration, and as such this was the main focus. I chose not to spike the project for this purpose, as I didn't have a clear plan of how it would come together.

- Currently, all the results are displayed at the same time. As the number of results increase, so will the time it takes to load the page. This could be solved by introducing pagination. Though it can be achieved at the application level, I feel this doesn't provide a good separation of concerns and would prefer to return the results in batches from storage.

- The installation and setup of Redis was a bit troublesome as I work on a linux device. This meant I needed to test the app was able to be installed and run on other systems (Mac & Windows). Containerizing the app would solve this problem, as everything the app needed could be delivered with it.

- If you have any questions or comments about this project I would love to hear any and all feedback! I'm curious to see how others would approach this problem and would enjoy listening to other developers thoughts regarding my own approach.

## Author

👤 **Danny Ajilore**

- Github: [Danielandro](https://github.com/Danielandro)
- LinkedIn: [Daniel Ajilore](https://www.linkedin.com/in/daniel-ajilore-78029b16/)

## 📝 License

Copyright © 2019 [Daniel Ajilore](https://github.com/Danielandro).<br />

This project is [MIT](https://github.com/Danielandro/junior-jobs-app/blob/master/LICENSE) licensed.

---
