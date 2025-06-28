const express=require('express')
const router=express.Router();


const registerRoute=require('../controllers/UserController');

router.post('/', registerRoute);

module.exports=router;
