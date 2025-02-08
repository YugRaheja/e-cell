const express = require('express')
const app = express() ; 
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();
const PORT = process.env.PORT;
const URL = process.env.ATLAS_URI;
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
mongoose.connect(URL)
.then(()=>{
    console.log("connected to db");
    app.listen(PORT, () => {
        console.log(`app listening on port ${PORT}`)
    })
})
.catch(()=>{
    console.log("failed to connect to db");
})



