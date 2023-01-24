import User from '../models/userModel.js'
//const User = require('../models/userModel.js')
import asyncHandler from 'express-async-handler'
//const asyncHandler = require('express-async-handler')
import generateToken from '../utils/generateToken.js'
//const generateToken = require('../utils/generateToken.js')

//@desc  Auth user & get a token
//@route POST /api/users/login
//@access Public
const authUser = asyncHandler(async (req,res)=>{
  res.header("Access-Control-Allow-Origin","*")
  const{email,password} = req.body
   //req.body will give us the object thats sent in the body of our front end/POSTMAN JSON, take note
  /* res.send({email,  this res,send was just done for example btw
     password}) */ //res.send accepts an object i think and not just variables, take note...hese are part of the things that you have to research on yor own

  const user = await User.findOne({email:email})
  if(user && (await user.matchPassword(password))){
    res.json({
      _id:user._id,
      name:user.name,
      email:user.email, 
      isAdmin:user.isAdmin,
      token:generateToken(user._id)


    })
  }else{
    res.status(401) //this means unauthorized
    throw new Error('invalid email or password')
  }


})

//@desc Register a new user
//@route POST /api/users
//@access Public
const registerUser = asyncHandler(async (req,res)=>{
  res.header("Access-Control-Allow-Origin","*")
  const{name, email, password,isAdmin} = req.body
   //req.body will give us the object thats sent in the body of our front end/POSTMAN JSON, take note
  /* res.send({email,  this res,send was just done for example btw
     password}) */ //res.send accepts an object i think and not just variables, take note...hese are part of the things that you have to research on yor own

  const userExists = await User.findOne({email:email})
  if(userExists){
    res.status(400)
    throw new Error('user already exists!')
  }

  const user = User.create({ //create is syntactic sugar for the save mehod, since creating entails saving i guess
     name:name,
     email:email,
     password:password,
     isAdmin:isAdmin
  })

   if(user){
     res.status(201).json({
       _id:user._id,
       name:user.name,
       email:user.email,
       isAdmin:user.isAdmin,
       token:generateToken(user._id)
     })
   }else{
     res.status(400)
     throw new Error('Invalid user data')
   }
})
















export {authUser , registerUser, 
  }

//exports.authUser =authUser
//exports.getUserProfile =getUserProfile
//exports.registerUser = registerUser
//exports.updateUserProfile = updateUserProfile
//exports.getUsers = getUsers
//exports.deleteUser = deleteUser
//exports.getUserById = getUserById
//exports.updateUser = updateUser
