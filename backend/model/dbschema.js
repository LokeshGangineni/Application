const mongoose=require('mongoose')


const UserSchema=new mongoose.Schema({
    fullname:String,
    email:String,
    phone:String,
    gender:String,
    password:String
})
console.log("entered to schema");

module.exports=mongoose.model('User',UserSchema);