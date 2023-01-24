# gratis-products - A products display API and Frontend

This is  a test for gratis digital's role of fullStack Developer. It is Done in Node JS(Express JS), MongoDB and React JS as requested by the company.\

## TO INSTALL 

 1.) Clone this repository into your preferred file (git clone -b main <THIS REPO'S URL>)\
 2.) Set up environment variables in a .env file (not included with this repository)\
 3.) run the install command with your package manager (e.g npm install)\
 4.) change directory into the frontend file and run the install command again\
 
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
   }\
