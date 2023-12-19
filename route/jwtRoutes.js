const express=require('express')
const jwtRoutes=express.Router()
const {userRegister}=require('../controllers/jwt')
jwtRoutes.post('/register',userRegister)
module.exports={jwtRoutes}

