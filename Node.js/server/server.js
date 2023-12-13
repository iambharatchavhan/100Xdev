
const express = require('express')
const app = express()
const port  = 3001


app.get('/',(req,res)=>{
    res.send("First server Welcome to the world")
})


app.listen(port,()=>{
    console.log(`we are in port no ${port}`)
})