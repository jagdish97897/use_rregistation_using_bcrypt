const express=require('express')
const app=express();
app.use(express.json());

const cors =require('cors')
app.use(cors())
const {jwtRoutes}=require('./route/jwtRoutes')
app.use('/',jwtRoutes)

app.listen(5000,()=>{
    console.log("server conected")
})