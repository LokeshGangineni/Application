const express=require('express')
const router=express.Router();

const loginRoute=require('../controllers/LoginUserController');

router.post('/',loginRoute);

module.exports=router;