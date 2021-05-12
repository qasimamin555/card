 const express=require('express')
 const route=express.Router()
 const User = require('../mongodb/scheme')
 const mongoose=require('mongoose');
 const bodyParser = require('body-parser');
 const cors=require('cors')
 const app=express();

  
 


app.use(cors());
app.use(bodyParser())
  
 route.get('/',(req,res)=>{
      res.sendFile(__dirname + "/index.html")
 })

  route.post("/search",(req,res)=>{
       const regex= new RegExp(req.body.name,'i')
           User.find({name:regex})
                  .then((myData)=>{
                       console.log(myData)
                  res.send(myData)
                  })
                })
    
   module.exports = route
