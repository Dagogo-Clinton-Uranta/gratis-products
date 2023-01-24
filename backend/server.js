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

import {notFound,errorHandler} from './Middleware/errorMiddleware.js'
//const {notFound,errorHandler} = require('./Middleware/errorMiddleware.js')


import userRoutes from './routes/userRoutes.js'
//const userRoutes = require('./routes/userRoutes.js')

import productRoutes from './routes/productRoutes.js'
//const productRoutes =require('./routes/productRoutes.js')

import uploadRoutes from './routes/uploadRoutes.js'
//const uploadRoutes =require('./routes/uploadRoutes.js')

import connectDB from './config/db.js'
//const connectDB = require('./config/db.js')


dotenv.config()
 
connectDB()

 const app = express()
if(process.env.NODE_ENV === 'development'){app.use(morgan('dev'))} 
 app.use(express.json())  //express body parser 

 const __dirname =path.resolve() //OKAY I DID THIS TO MIMIC PATH.JOIN(__DIRNAME) , BECAUSE THE OG __dirname IS ONLY ACCESSIBLE IN COMMON JS AND NOT ES6 SYNTAX
 app.use('/uploads', express.static(path.join(__dirname,'/uploads')))
 
 
 
 if(process.NODE_ENV === 'production'){
 
   app.use(express.static(path.join(__dirname,'/frontend/build')))
 
   app.get('*', (req,res) =>{ 
     res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
   })
 }else{
   /*app.get('/', (req,res) => {
     res.send('API is running...')
   })*/
 
   app.use(express.static(path.join(__dirname,'/frontend/build')))
 
   app.get('*', (req,res) =>{ 
     res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
   })
 
 
 
 }

app.use('/api/users',userRoutes)
app.use('/api/products',productRoutes)
app.use('/api/upload',uploadRoutes)

app.use(notFound)

app.use(errorHandler)


const port=process.env.PORT||5000

app.listen(port, ()=>{
  console.log(`Server is listening in ${process.env.NODE_ENV} mode,
     on port ${port}`.yellow.bold)
})
