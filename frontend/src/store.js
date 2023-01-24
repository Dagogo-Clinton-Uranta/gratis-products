import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'


import {userLoginReducer, userRegisterReducer, userDetailsReducer, userProfileUpdateReducer,userListReducer,userDeleteReducer,userUpdateReducer} from './reducers/userReducers.js'
import {productListReducer, productDetailsReducer, productDeleteReducer,productCreateReducer,productUpdateReducer, productCreateReviewReducer,productTopRatedReducer} from './reducers/productReducers.js'

const reducer = combineReducers({
 
  userLogin:userLoginReducer,
  userRegister:userRegisterReducer,
  userDetails:userDetailsReducer,
  productList: productListReducer,
  productDetails:productDetailsReducer,
  productDelete:productDeleteReducer,
  productCreate:productCreateReducer,
  productUpdate:productUpdateReducer,
  productCreateReview:productCreateReviewReducer,
  productTopRated:productTopRatedReducer,

})
// JSON.PARSE LOCAL STORAGE CUZ ITS IN STRING FORM AND WE WANT OUR OBJECT BACK IN REGULAR FORM

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')):null


const initialState = {
 
  userLogin : {userInfo: userInfoFromStorage}
}

const middleware =[thunk]

const store = createStore(reducer, initialState,composeWithDevTools(applyMiddleware(...middleware)));

export default store
