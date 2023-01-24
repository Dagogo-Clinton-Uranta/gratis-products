import React from 'react'
import {Route} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap'
import {logout} from '../actions/userActions.js'
import SearchBox from './SearchBox.js'

const Header = ({history}) => {

  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin
  const logoutHandler = () => {
   dispatch(logout(history))

  }
    return(
<header>

 <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
  <Container>
  <LinkContainer to="/">
  {/*why cant we wrap this in a link tag?*/}
  <Navbar.Brand >GRATIS DIGITAL</Navbar.Brand>
  </LinkContainer>

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <Route render ={({history})=> <SearchBox history={history}/>} /> 
   <Nav className="ml-auto">

    {/*DONT FORGET TO USE THE CDN OF FONT-AWESOME IN INDEX.HTML
    FROM CDN JS.COM ,JUST TYPE FONT AWESOME AND COPY IT*/}


   {userInfo?(
     <NavDropdown title ={userInfo.name} id='username'>

       <NavDropdown.Item onClick={logoutHandler} >Logout </NavDropdown.Item>

    {!userInfo.isAdmin  &&  <LinkContainer to='/admin/productlist'>
       <NavDropdown.Item >View Products</NavDropdown.Item>
           </LinkContainer>}
     </NavDropdown>
   ):(
     <LinkContainer to='/login'>
          <Nav.Link><i className='fas fa-user'></i>Sign In</Nav.Link>
     </LinkContainer>
   )}

   {userInfo && userInfo.isAdmin && (
     <NavDropdown title ='Admin functionality' id='adminmenu'>


{/*1*/}      <LinkContainer to='/admin/productlist'>
            <NavDropdown.Item >View Products</NavDropdown.Item>
           </LinkContainer>



     </NavDropdown>
   )}


   </Nav>

  </Navbar.Collapse>
  </Container>
 </Navbar>

</header>
    )
}

export default Header
/*export as default means that , that's the only thing coming out of this file*/
