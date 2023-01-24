
import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import HomeScreen from './screens/HomeScreen.js'

import LoginScreen from './screens/LoginScreen.js'
import RegisterScreen from './screens/RegisterScreen.js'
import ProductScreen from './screens/ProductScreen.js'

import ProductListScreen from './screens/ProductListScreen.js'
import ProductEditScreen from './screens/ProductEditScreen.js'

const App = () => {

    return (
      
      
  <Router> 
      <Header/>
      <main className ='py-3'>
       <Container>
       
       < Route path='/login' component={LoginScreen}/>
       < Route path='/register' component={RegisterScreen}/>
       
       < Route path='/product/:id' component={ProductScreen}/> 
       
       < Route path='/admin/productlist'  exact component={ProductListScreen}/>
        < Route path='/admin/productlist/:pageNumber'  exact component={ProductListScreen}/>
        < Route path='/admin/product/:id/edit' component={ProductEditScreen}/>

       < Route path='/search/:keyword' component={HomeScreen} exact/>
       < Route path='/page/:pageNumber'exact component={HomeScreen}/>
        < Route path='/search/:keyword/page/:pageNumber'  exact component={HomeScreen}/>
       < Route path='/'exact component={HomeScreen}/>

       
       </Container>
      </main>
      <Footer/>
  </Router> 
  
    )
}

export default App
