const  express =require ('express');
const  mongoose =require ('mongoose')
const cors =require('cors')
const bodyParser=require('body-parser')
const route =require("./routes/router.js")
const app =express()
const path = require('path');
const port = process.env.PORT || 3002
require('dotenv').config();



app.use(function (req,res,next){
    res.header("Access-Control-Allow-Origin","*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept,Authorization"
    )
    res.header("Access-Control-Allow-Methods",'GET,PUT,PATCH,POST,DELETE,OPTIONS')
    next()
})


app.use(bodyParser())
app.use(cors());

app.use(function (req,res,next){
    res.header("Access-Control-Allow-Origin","*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept,Authorization"
    )
    res.header("Access-Control-Allow-Methods",'GET,PUT,PATCH,POST,DELETE,OPTIONS')
    next();
  
  })

mongoose.connect(process.env.MongoDB_URI,
{ useNewUrlParser: true,
    useUnifiedTopology: true})

mongoose.connection.once('open',()=>{
    console.log('mongoose db is working properly yettt')
   // addUser()
})
.on("error",()=>{
    console.log('there is a mongo Db error')
})
 
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(__dirname+"/frontend/build"))
 }
 

app.use('/',route)
    
  


app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})
