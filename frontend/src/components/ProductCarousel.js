import React ,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Carousel,Image} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Loader from './Loader'
import Message from './Message'


const ProductCarousel = () => {
   const dispatch = useDispatch()

  

    useEffect(()=>{
      
    },[]) 

    return (
      <>
       <Carousel pause='hover' className="bg-dark">
       
       </Carousel>

      </>

    )

}


export default ProductCarousel
