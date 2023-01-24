import React ,{ useEffect} from 'react';
//import products from '../products';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import ProductComponent from '../components/productComponent'
import ProductCarousel from '../components/ProductCarousel'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import Message from '../components/Message'
import {useDispatch, useSelector} from 'react-redux';

//import {Helmet} from 'react-helmet'
import Meta from '../components/Meta'
/*dont forget to npm install axios*/

 const HomeScreen = ({match}) => {
   const keyword = match.params.keyword

   const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()
 
useEffect(()=>{ 
 
}, []) 

   return (
     <>
     <Meta/>
    {/* meta component replaces this helmet component <Helmet >//you can slap this on any screen/component you want, after importing it
      <title>Welcome to Proshop|Home</title>
      <meta name='description' content='we sell the best products for cheap' />
      <meta name='keywords' content='electronics, tech,apple, cheap gadgets' />
    </Helmet>*/}
     {!keyword ? <ProductCarousel/>: <Link to='/' className='btn btn-light'>Go Back</Link>}

      <h1>Latest Products</h1>
      {
      (  <>
        <Row>
     
      </Row>

      <Paginate />
    </>)
    }

     </>
   )
 };




export default HomeScreen;
