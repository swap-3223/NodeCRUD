const express = require('express')
const studRoute = require('./routes/studRoutes')
require('dotenv').config();

const PORT = process.env.PORT || 9000;


const db = require('./connection');
const { configDotenv } = require('dotenv');
const app = express();

app.use(studRoute)
// app.use(studPost)
// app.use(queryRout)
// app.use(updateRoute)



app.listen(PORT,()=>{
    console.log(`Server running on port: localhost:${PORT}`)
})