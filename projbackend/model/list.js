const mongoose=require("mongoose");
const schema=mongoose.Schema;
var listSchema=new schema({
    companyName:{
        type:String,
        require:true,
        maxLength:50,
        unique:true,
        trim:true
    },
    companyDesc:{
        type:String,
        require:true,
        maxLength:1000,
        trim:true
    },
    address:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        unique:true,
        required:true
    },
    number:{
        type:String,
        trim:true,
        required:true,
    },
    state:{
        type:String,
        trim:true,
        required:true
    },
    city:{
        type:String,
        trim:true,
        required:true
    }
})

module.exports = mongoose.model("list",listSchema);