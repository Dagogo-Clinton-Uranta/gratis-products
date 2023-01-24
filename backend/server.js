import path from 'path'
//const path = require('path')

import express from 'express'
//const express = require('express')

//import products from './data/products.js'
import dotenv from 'dotenv'
//const dotenv = require('dotenv')

import colors from 'colors'
//const colors = require('colors')


import morgan from 'morgan'
//const morgan = require('morgan')


import connectDB from './config/db.js'
//const connectDB = require('./config/db.js')


dotenv.config()
 
connectDB()

 const app = express()
if(process.env.NODE_ENV === 'development'){app.use(morgan('dev'))} 
 app.use(express.json())  //express body parser 

app.get('/', (req,res) =>{
  res.send('API is running...')
})





const port=process.env.PORT||5000

app.listen(port, ()=>{
  console.log(`Server is listening in ${process.env.NODE_ENV} mode,
     on port ${port}`.yellow.bold)
})
