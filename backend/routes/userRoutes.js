import express from 'express'
//const express = require('express')

import {authUser,registerUser} from '../controllers/userControllers.js'
//const {authUser, getUserProfile, registerUser,updateUserProfile,getUsers, deleteUser,getUserById, updateUser} =require('../controllers/userControllers.js')

import {protect,admin} from '../Middleware/authMiddleware.js'
//const {protect,admin} = require('../Middleware/authMiddleware.js')

const router = express.Router()

//@Fetch all products
//@GET api/users/
//@Public access
//@this is good commenting syntax,leting others know the routes
router.route('/').post(registerUser)
router.route('/login').post(authUser)


//exports.router =router ;
export default router