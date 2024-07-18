require('dotenv').config()
const express = require('express')
//iport express from "express"
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/sabin',(req, res)=>{
    res.send("Hello from Sabin")
})

app.get('/login', (req, res)=>{
    res.send('<h1>please login</h>')
})

app.get('/youtube', (req, res)=>{
    console.log('received from /youtube');
    res.send('<a href="https://youtube.com>Youtube</a>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})