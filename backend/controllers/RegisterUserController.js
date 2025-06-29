const user =require('../model/dbschema');
const bcrypt=require('bcryptjs');

const userRegister=async (req, res) => {

  const formData = req.body;
  console.log(formData);
  const{fullname,email,phone,gender,password}=formData;
  // const password=formData.password;
  const hashedPassword=await bcrypt.hash(password,10);
  const newUser= new user(
    {
      fullname,
      email,
      phone,
      gender,
      password:hashedPassword

    }
  );
    
  await newUser.save();
  console.log("Saved Successfully")
  console.log("Received Form Data:", formData);

  // You can add validation or DB saving logic here


  res.status(200).json({ message: "Registration successful!" });
};
module.exports=userRegister;