import React from 'react'
import {Route} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap'
import {logout} from '../actions/userActions.js'
import SearchBox from './SearchBox.js'

const Header = () => {

  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin
  const logoutHandler = () => {
   dispatch(logout())

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
  <Route render ={({history})=> <SearchBox history={history}/>} /> {/*THERE IS A VERY IMPORTANT THING TO LEARN HERE, IF YOU PUT IN A COMPONONENT DIRECTLY IN THE NAVBAR, IT HAS NO ACCESS TO PROPS, SO YOU GOTTA PUT IT IN A ROUTE AND THEN USE THE RENDER FUNCTION TO PASS IN PROPS..YOU GOTTA STUDY THIS*/}
   <Nav className="ml-auto">

    {/*DONT FORGET TO USE THE CDN OF FONT-AWESOME IN INDEX.HTML
    FROM CDN JS.COM ,JUST TYPE FONT AWESOME AND COPY IT*/}


   {userInfo?(
     <NavDropdown title ={userInfo.name} id='username'>
     <LinkContainer to='/profile'>
          <NavDropdown.Item >Profile  </NavDropdown.Item>
     </LinkContainer>

       <NavDropdown.Item onClick={logoutHandler} >Logout </NavDropdown.Item>
     </NavDropdown>
   ):(
     <LinkContainer to='/login'>
          <Nav.Link><i className='fas fa-user'></i>Sign In</Nav.Link>
     </LinkContainer>
   )}

   {userInfo && userInfo.isAdmin && (
     <NavDropdown title ='Admin' id='adminmenu'>

{/*1*/}     <LinkContainer to='/admin/userlist'>
            <NavDropdown.Item >Users</NavDropdown.Item>
          </LinkContainer>

{/*1*/}      <LinkContainer to='/admin/productlist'>
            <NavDropdown.Item >Product</NavDropdown.Item>
           </LinkContainer>

{/*1*/}      <LinkContainer to='/admin/orderlist'>
            <NavDropdown.Item >Orders</NavDropdown.Item>
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