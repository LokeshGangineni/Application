const user =require('../model/dbschema');
// const userRegister = require('./UserController');



const userLogin=async (req,res)=>
{
  try{
    const formData=req.body;
    console.log(formData);
    const {userName,password}=formData;
   
    console.log( "username from frontend",userName);
    console.log( "password from frontend",password);


    const userDataFromDb=await user.findOne({ email: userName });
    const userNameFromDb=userDataFromDb.userName;
    const passwordFromDb=userDataFromDb.password;
    console.log(passwordFromDb);
    console.log(userDataFromDb);

    if(!userDataFromDb)
    {
      console.log("checked username found or not");
      return res.status(404).json({message:"user not found"});
    }
    else
    {
      console.log("entered")
      if(passwordFromDb.trim()!==password.trim())
      {
        console.log("checked password ");
        return res.status(401).json({message:"password is not matching"})
      }
      else
      {
        
        return res.status(200).json({message:"Login successful"})
      }
    }
  

  }
  catch(err)
  {
    console.error(err);
    res.status(500).json({error:"Server error"});
  }


};

module.exports=userLogin;