const List=require("../model/list");
const {validationResult}=require('express-validator')

exports.setCompanyDetail=(req,res)=>{
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
	return res.status(400).json({
            error : errors.array()[0].msg
        })

    }


    const list=new List(req.body);
    
    list.save((error,list)=>{
        if(error){
            
            return res.status(400).json({
                error:"Error! Please enter correct value."
            })
        }
        res.json({list});
    })
}


exports.getAllCompany=(req,res)=>{
    List.find().exec((err,list)=>{
        if(err){
            return res.status(400).json({
                error:"Failed to fetch Company Data"
            })
        }
        res.json(list)
    })
}

exports.searchByName=(req,res)=>{
    const {companyName}=req.body;
    List.find({companyName:{$regex: new RegExp(companyName, "ig")}}).exec((err,list)=>{
        if(err){
            console.log(err);
        }
        res.json(list)
    })
}