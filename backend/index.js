require('dotenv').config();

const express = require('express')
const app = express(); 
const mongoose = require('mongoose')
// const dotenv = require('dotenv')
const cors = require('cors');
const People = require('./models/people.model.js');
// dotenv.config();
// const PORT = process.env.PORT;
const PORT = process.env.PORT || 5000;
const URL = process.env.ATLAS_URI;
app.use(express.json())
app.use(cors())
// app.get('/contact', async (req, res) => {
//     try{
//        const newpeople = await People.create(req.body);
//        res.status(200).json(newpeople);
//     }catch(error){
//         res.status(500).json({message : error.message});
//     }
//   })  
app.get('/contact', async (req, res) => {
    try {
        const people = await People.find();
        res.status(200).json(people);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
});

app.post('/contact', async (req,res)=>{
    try {
        const newPerson = await People.create(req.body);
        res.status(201).json(newPerson);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
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

