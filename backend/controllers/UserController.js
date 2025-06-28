const user =require('../model/dbschema');

const userRegister=async (req, res) => {

  const formData = req.body;
  console.log(formData);
  const newUser= new user(formData);
  
  await newUser.save();
  console.log("Saved Successfully")
  console.log("Received Form Data:", formData);

  // You can add validation or DB saving logic here


  res.status(200).json({ message: "Registration successful!" });
};
module.exports=userRegister;