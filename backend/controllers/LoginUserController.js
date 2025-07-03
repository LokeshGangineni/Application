const user =require('../model/dbschema');
// const userRegister = require('./UserController');
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')


const userLogin=async (req,res)=>
{
  try{
//fetch info from frontend    
    const formData=req.body;
    console.log(formData);
    const {userName,password}=formData;
   
    console.log( "username from frontend",userName);
    console.log( "password from frontend",password);

//  fetching data from db 
    const userDataFromDb=await user.findOne({ email: userName });
    

    if(!userDataFromDb)
    {
      console.log("checked username found or not");
      return res.status(404).json({message:"user not found"});
    }
    const userNameFromDb=userDataFromDb.userName;
    const passwordFromDb=userDataFromDb.password;
    console.log(passwordFromDb);
    console.log(userDataFromDb);
    const isMatch=await bcrypt.compare(password,passwordFromDb);
    
      if(!isMatch)
      {
        console.log("checked password ");
        return res.status(401).json({message:"password is not matching"})
      }
      else
      {
        
        return res.status(200).json({message:"Login successful"})
      }
    
  }
  catch(err)
  {
    console.error(err);
    res.status(500).json({error:"Server error"});
  }

// creation of jwt token 

const token=jwt.sign({id:userDataFromDb.id, userName:userDataFromDb.userName},process.env.JWT_SECRET,{expiresIn:'1h'});

//send tooken to backend
res.status(200).json({message:" token generated successfully ",token:token})
};

module.exports=userLogin;