const express=require('express')
const router=express.Router();


const registerRoute=require('../controllers/RegisterUserController');

router.post('/', registerRoute);

module.exports=router;
