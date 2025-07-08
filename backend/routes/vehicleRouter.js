const express=require('express');
const router=express.Router();


const vehicleRouter = require('../controllers/VehicleController');

    
    router.post('/',vehicleRouter)




module.exports=router;