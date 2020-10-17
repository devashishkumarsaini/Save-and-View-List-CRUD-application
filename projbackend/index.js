const express=require('express');
const app=express();
var cors = require('cors');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const {body,validationResult}=require("express-validator");
const {setCompanyDetail,getAllCompany,searchByName}=require('./controller/list');
const port=8000;

mongoose.connect(
    'mongodb://localhost:27017/companyList',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    }
).then(()=>{
    console.log("DATABASE CONNECTED")
})
app.use(bodyParser.json());
app.use(cors());

app.get("/api",getAllCompany); 
app.post("/api/all",searchByName);

app.post("/api/create",[
    body('companyName','Company name is required!').notEmpty(),
    body('email','Email is required!').notEmpty(),
    body('number','Mobile is required!').notEmpty(),
    body('state','State is required!').notEmpty(),
    body('city','City name is required!').notEmpty()
],setCompanyDetail);


app.listen(port,()=>console.log(`SERVER IS RUNNING ON PORT ${port}`));