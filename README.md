# gratis-products - A products display API and Frontend

This is  a test for gratis digital's role of fullStack Developer. It is Done in Node JS(Express JS), MongoDB and React JS as requested by the company.\

## TO INSTALL 

 1.) Clone this repository into your preferred file (git clone -b main <THIS REPO'S URL>)\
 2.) Set up environment variables in a .env file (not included with this repository)\
 3.) run the install command with your package manager (e.g npm install)\
 4.) change directory into the frontend file and run the install command again\
 
 ## TO START 

 1.) Go To the root directory and run your package manager with the "dev" command (e.g npm run dev)\
 2.) Type npm run client to run only the client, or npm run server to run only the API\
 
  ## THINGS OF NOTE 

 1.) Redux is used here for state managenent(store, provider,reducers and actions), which allows for scaling of this application\
 2.) A Carousel of top products is displayed in the frontend, as a UI feature to aid users (it just collects products from the same location as the products displayed below it.\
 3.) Passwords are stored as hashes in the database and decrypted with Bcrypt library (as a way to protect our uses information from being compromised
 4.) Pagination Requests for Items from the database, 3 items at a time, for a less clustered display.
 
 
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
