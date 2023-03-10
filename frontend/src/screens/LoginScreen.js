import React, {useState ,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message.js'
import Loader from '../components/Message.js'
import {login} from '../actions/userActions.js'
import FormContainer from '../components/FormContainer.js'





const LoginScreen = ({location, history}) => { 
  const [email,setEmail] = useState('')  
  const [password,setPassword] = useState('')
  const dispatch = useDispatch() 
  const userLogin = useSelector(state => state.userLogin);
  const {loading, error,userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1]:'/'
//location .search has the url query string, 

//because we dont want to able to come into the login screen ONCE WE ARE ALREADY LOGGED IN, effect this in the useEffect below

  useEffect( () => {
    if(userInfo){ //cuz user info exists only when you're logged in
       history.push(redirect)
    }
  },[redirect,history,userInfo])



  const submitHandler = (e) => {
          e.preventDefault()
          //this is where we want to to call our action to dispatch login
        dispatch(login(email,password))
  }

    return (
       <FormContainer>
        <h1>Sign in</h1>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader/>}
        <Form onSubmit={submitHandler}>
         <Form.Group controlId='email'>

          <Form.Label>  Email Address </Form.Label>
          <Form.Control type='email' placeholder="enter email" value={email} onChange={(e)=>setEmail(e.target.value)}></Form.Control>
           {/*the value of form control is form control from the state.*/}
         </Form.Group>

         <Form.Group controlId='password'>

          <Form.Label>  Password  </Form.Label>
          <Form.Control type='password' placeholder="enter password" value={password} onChange={(e)=>setPassword(e.target.value)}></Form.Control>

         </Form.Group>

          <Button type='submit' variant='primary'>Sign In</Button>
        </Form>

        <Row className='py-3'>
         <Col>
           New Customer? <Link to={'/register'}> Register</Link>
         </Col>
        </Row>

       </FormContainer>

    )

}

export default LoginScreen
