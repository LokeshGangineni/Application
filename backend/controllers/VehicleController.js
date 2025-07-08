const Vehicle=require('../model/VehicleSchema');

const vehicleRegister=async (req,res)=>
{
    try{

        console.log("came to backend");
        const formData=req.body;
        const  newVehicle= new Vehicle(formData);
        await newVehicle.save();
        return res.status(200).json({mesage:"Vehicle registration successful"});
    }catch (error) {
        console.error("Error saving vehicle:", error);
        res.status(500).json({ error: "Internal server error" });
  }


};

module.exports=vehicleRegister;
