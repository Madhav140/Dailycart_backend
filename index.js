require('dotenv').config()
require('./DB/connection')

const express = require('express')

const cors = require('cors')

const dailyServer = express()


const routes = require('./Routers/router')


dailyServer.use(cors())
dailyServer.use(express.json())
dailyServer.use(routes)

const port = 3000 || process.env.PORT

dailyServer.listen(port,()=>{
    console.log('Daily cart server running successfully');
})

dailyServer.get('/',(req,res)=>{
    res.send('<h1>Server running successfully and ready to accept client request</h1>')
})

