const mongoose = require('mongoose')
require('dotenv').config();

const url = process.env.url;

mongoose.connect(url);

const db = mongoose.connection;

db.on('connected',()=>{
    console.log("Mongodb connected")
})

db.on('disconnected',()=>{
    console.log("Mongodb disconnected")
})

db.on('error',(err)=>{
    console.log("error",err)
})

module.exports = db;