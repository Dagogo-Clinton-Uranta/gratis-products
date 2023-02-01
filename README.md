# gratis-products - A products display API and Frontend

This is  a test for gratis digital's role of fullStack Developer. It is Done in Node JS(Express JS), MongoDB and React JS as requested by the company.



## TO INSTALL 

 1.) Clone this repository into your preferred file (git clone -b main <THIS REPO'S URL>)\
 2.) Set up environment variables in a .env file (not included with this repository)\
 3.) run the install command with your package manager (e.g npm install)\
 4.) change directory into the frontend file and run the install command again\
 
 ## TO START 

 1.) Go To the root directory and run your package manager with the "dev" command (e.g npm run dev)\
 2.) Type npm run client to run only the client, or npm run server to run only the API\
 
 
 ## FRONTEND LINK 
 https://gratis-frontend-dagogo.netlify.app/
 
 
  ## HOW TO USE THE FRONTEND
  1.) For a user sign in with jane@example.com (password: 123456) or register a new user\
  2.) For an admin sign in with admin@example.com (password: 123456) or register as an admin\
  3.) once signed in (as a user) ,you will see a list of products,separated by pagination, click on your name in the navbar, to view the products in list format and to add a product.\
  4.)  once signed in (as an admin) ,you will see a list of products,separated by pagination, click on "ADMIN FUNCTIONALITY" in the navbar, to view the products in list format and to add a product.\
  
  
 ## TESTING
  1.)unfortunately due to time I was not able to write tests for the api, but what I would have done (using Jest) was:
  a.) I would assert that my API sends me an array
  b.) I would assert that each member of my array is an object
  c.) I would assert that each member of the array had the properties price, countInStock, name,brand ,image, description, createdAt and updatedAt and each property is not null or undefined
  
  
  ## API LINK
  https://gratis-digital-dagogo.herokuapp.com/
  
  ## HOW TO USE THE API
  1.) /api/products/top
   ###  on Success:  - sample response
    [ {"rating":5,
    "numReviews":12
    "price":399.99,
    "countInStock":11,
    "_id":"6014a884bb347ceb20e5b8d0",
    "name":"Sony Playstation 4 Pro White Version",
    "image":"/images/playstation.jpg",
    "description",:"The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television,music"\,
    "brand":"Sony","category":"Electronics",
    "user":"6014a884bb347ceb20e5b8ca","reviews":[],
    "v":0\,
    "createdAt":"2021-01-30T00:29:56.669Z",
    "updatedAt":"2021-01-30T00:29:56.669Z"
    ,
    .... and 2 more of the best products in this array, in an object format as well]
    
   ### on Failure - sample response
    {
    "message":<error message>,
    "success":false,
    "status":<status Code>,
    stack::null (stack is visible is not visible in production, only development environment)
    }
  
  2.) /api/products
     
     
   ###  on Success: - sample response
    [ {"rating":5,
    "numReviews":12
    "price":399.99,
    "countInStock":11,
    "_id":"6014a884bb347ceb20e5b8d0",
    "name":"Sony Playstation 4 Pro White Version",
    "image":"/images/playstation.jpg",
    "description",:"The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television,music"\,
    "brand":"Sony","category":"Electronics",
    "user":"6014a884bb347ceb20e5b8ca","reviews":[],
    "v":0\,
    "createdAt":"2021-01-30T00:29:56.669Z",
    "updatedAt":"2021-01-30T00:29:56.669Z"
     }
    ,
    .... ### all products in the database will come in this array]\
    
   ### on Failure - sample response
    {
    "message":<error message>,
    "success":false,
    "status":<status Code>,
    stack::null (stack is visible is not visible in production, only development environment)
    }
  
  3.) /api/products/${id}
  ###  on Success: - sample response
       {"rating":5,
    "numReviews":12
    "price":399.99,
    "countInStock":11,
    "_id":"6014a884bb347ceb20e5b8d0",
    "name":"Sony Playstation 4 Pro White Version",
    "image":"/images/playstation.jpg",
    "description",:"The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television,music"\,
    "brand":"Sony","category":"Electronics",
    "user":"6014a884bb347ceb20e5b8ca","reviews":[],
    "v":0\,
    "createdAt":"2021-01-30T00:29:56.669Z",
    "updatedAt":"2021-01-30T00:29:56.669Z"
     }
     
   ### on Failure - sample response
    {
    "message":<error message>,
    "success":false,
    "status":<status Code>,
    stack::null (stack is visible is not visible in production, only development environment)
    }
  
  4.) anything else
  
  ### results in Failure
    {
    "message":<error message>,
    "success":false,
    "status":<status Code>,
    stack::null (stack is visible is not visible in production, only development environment)
    }
  
  ##BUGS
  1.) When one registers on the frontend, either as an admin or a user, the navbar does not display the person's name right away. You have to logout first and then login again. - THIS IS AN ISSUE WITH REDUX AND LOCAL STORAGE, if I had more time, I would request a fresh call from the mongoDb database instead of storing the existing data into local storage\
  2.) When one logs out , the react code attempts to read an object containing userInfo, which isn't there anymore, so an error occurs after log out- I would have done a setTimeout before the reading took place once more, if I had some extra time\
  

 1.) Go To the root directory and run your package manager with the "dev" command (e.g npm run dev)\
 2.) Type npm run client to run only the client, or npm run server to run only the API\
 
  ## THINGS OF NOTE 

 1.) Redux is used here for state managenent(store, provider,reducers and actions), which allows for scaling of this application\
 2.) A Carousel of top products is displayed in the frontend, as a UI feature to aid users (it just collects products from the same location as the products displayed below it.\
 3.) Passwords are stored as hashes in the database and decrypted with Bcrypt library (as a way to protect our uses information from being compromised\
 4.) Pagination Requests for Items from the database, 3 items at a time, for a less clustered display.\
 5.) There is a search bar in the UI functions only to take users to the product page of the item they searched for. It does not work to single out products to edit\
 
 
 ## Database Structure -
 
 Products = {\
        _id:{type:mongoDB object ID type,required:true},\
        user:{type:mongoDB object ID type,required:true, ref:'User ID in users collection'},\
        name:{type: String ,required:true},\
        image:{type: String ,required:true},\
        brand:{type: String ,required:true},\
        category:{type:String ,required:true},\
        description:{type:String ,required:true},\
        rating:{type:Number ,required:true ,default:0},\
        numReviews:{type:Number ,required:true ,default:0},\
        price:{type:Number ,required:true ,default:0},\
        countInStock:{type:Number ,required:true ,default:0}  
 
 }  
 
  Users = {\
        _id:{type:mongoDB object ID type,required:true},\
        name:{type: String ,required:true},\
        email:{type: String ,required:true, unique:true},\
        password:{type: String ,required:true},\
        isAdmin:{type: Boolean ,required:true, default:false}\
   }
