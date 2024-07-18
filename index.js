require('dotenv').config();
const express = require('express');
//iport express from "express"
const app = express();
// const port = 3000
const githubData={
  "login": "sabinkaphle35",
  "id": 168013480,
  "node_id": "U_kgDOCgOuqA",
  "avatar_url": "https://avatars.githubusercontent.com/u/168013480?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/sabinkaphle35",
  "html_url": "https://github.com/sabinkaphle35",
  "followers_url": "https://api.github.com/users/sabinkaphle35/followers",
  "following_url": "https://api.github.com/users/sabinkaphle35/following{/other_user}",
  "gists_url": "https://api.github.com/users/sabinkaphle35/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/sabinkaphle35/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/sabinkaphle35/subscriptions",
  "organizations_url": "https://api.github.com/users/sabinkaphle35/orgs",
  "repos_url": "https://api.github.com/users/sabinkaphle35/repos",
  "events_url": "https://api.github.com/users/sabinkaphle35/events{/privacy}",
  "received_events_url": "https://api.github.com/users/sabinkaphle35/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Sabin Kaphle",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 3,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2024-04-24T16:32:55Z",
  "updated_at": "2024-07-18T18:04:54Z"
};

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/sabin',(req, res)=>{
  res.send("Hello from Sabin");
})

app.get('/login', (req, res)=>{
  res.send('<h1>please login</h>');
})

app.get('/youtube', (req, res)=>{
  console.log('received from /youtube');
  res.send('<a href="https://youtube.com>Youtube</a>');
})

app.get('/github', (req, res)=>{
  res.json(githubData);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
})