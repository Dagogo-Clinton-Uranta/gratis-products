import express from 'express'
//const express= require('express')

import {getProducts, getProductById,deleteProduct,createProduct, updateProduct,getTopProducts,createProductReview} from '../controllers/productControllers.js'
//const {getProducts, getProductById,deleteProduct,createProduct, updateProduct,getTopProducts,createProductReview}= require('../controllers/productControllers.js')

import {protect,admin} from '../Middleware/authMiddleware.js'
//const {protect,admin} = require('../Middleware/authMiddleware.js') 

const router = express.Router()
  
//@Fetch all products
//@GET api/products/
//@Public access
//@this is good commenting syntax,leting others know the routes
router.route('/').get(getProducts).post(protect,createProduct)
router.route('/:id/reviews').post(protect,createProductReview)
router.get('/top',getTopProducts)

//@Fetch single product
//@GET api/products/:id
//@@Public access
//THIS ASYNC HANDLER AND RES.STATUS, YOU NEED TO KNOW WHAT THEY ARE
router.route('/:id').get(getProductById).delete(protect,admin,deleteProduct).put(protect,updateProduct)


//exports.router = router;
export default router