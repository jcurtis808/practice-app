const express = require('express');
const connectDB = require('./config/database');
const app = express();
const path = require('path');
require('dotenv').config();

connectDB();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static(path.join(__dirname, '../client/build')))
// app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../client/build/index.html'))

app.listen(process.env.PORT, ()=>{
  console.log(`Server is running on port ${process.env.PORT}`)
})    