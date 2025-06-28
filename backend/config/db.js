const mongoose=require('mongoose')

const connection=async ()=>
{
    try{
        await mongoose.connect('mongodb://localhost:27017/lokeshdb',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            console.log("mongodb is connected");
        }
        catch(err){
            console.log("connecting db failed ", err)
        }
}
module.exports=connection;