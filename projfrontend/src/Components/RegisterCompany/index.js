import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { submitFormDetail } from "../../apicalls";

const RegisterCompany = () => {

    const [formDetail,setFormDetail]=useState({
        companyName:'',
        companyDesc:'',
        address:"",
        email:'',
        number:'',
        state:'',
        city:'',
        error:false,
        success:false
    })

    const {companyName,companyDesc,email,number,state,city,address,success,error} = formDetail;

    const submitDetails=e=>{
        e.preventDefault();
        setFormDetail({ ...formDetail, error: false });
        submitFormDetail({ companyName,companyDesc,email,number,state,city,address })
        .then(data => {
            if (data.error) {
                setFormDetail({ ...formDetail, error: data.error, success: false });
            } 
            else {
                setFormDetail({
                    ...formDetail,
                    companyName:'',
                    companyDesc:'',
                    address:"",
                    email:'',
                    number:'',
                    state:'',
                    city:'',
                    error:false,
                    success:true
                });
            }
        })
    }

    const onValueChange=(e)=>{
        setFormDetail({
            ...formDetail,[e.target.name]:e.target.value
        })
    }

    
    const disable=(companyName==='') || (companyDesc==='') || (address==='') || (email==='') || (number==='') || (state === '') || (city==='');



    return (
        <div style={{marginTop:"10px",marginBottom:"10px"}} className="d-flex align-items-center justify-content-center">
            
            <form onSubmit={submitDetails} style={{width:"90%",boxShadow:"0px 0px 10px rgb(0,0,0,0.5)",padding:"20px 50px",borderRadius:"15px"}}>
            <Link to="/">
                    <button className="btn btn-primary my-4">All Companies</button>
                    </Link>
                <h4 className="text-center">Register Company</h4>
                <div class="form-row">
                    <div class="form-group col">
                        <label for="inputCompanyName">Company Name<span className="text-danger">*</span></label>
                        <input type="text" name="companyName" onChange={onValueChange} value={companyName} class="form-control" id="inputCompanyName" placeholder="XYZ Pvt. Ltd."/>
                        <small id="help" class="form-text text-muted">Name should be unique</small>
                    </div>
                </div>
                    <div class="form-group">
                        <label for="inputDescription">Description</label>
                        <input type="text" name="companyDesc" onChange={onValueChange} value={companyDesc} class="form-control" id="inputDescription" placeholder="Company Description"/>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress">Address<span className="text-danger">*</span></label>
                        <input type="text" name="address" onChange={onValueChange} value={address} class="form-control" id="inputAddress" placeholder="Full Address"/>
                        <span className=""></span>
                    </div>
                    <div className="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputEmail">Email<span className="text-danger">*</span></label>
                            <input type="email" name="email" onChange={onValueChange} value={email} class="form-control" id="inputEmail" placeholder="Email Address"/>
                            <small id="help" class="form-text text-muted">Email should be unique</small>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputMobile">Mobile<span className="text-danger">*</span></label>
                            <input type="number" name="number" onChange={onValueChange} value={number} class="form-control" id="inputMobile" placeholder="Mobile"/>
                            <small id="help" class="form-text text-muted">Email should be unique</small>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputState">State<span className="text-danger">*</span></label>
                            <select id="inputState" name="state" onChange={onValueChange} value={state} class="form-control">
                                <option className="selected">Select State</option>
                                <option>Maharastra</option>
                                <option>Uttar Pradesh</option>
                                <option>Gujrat</option>
                            </select>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputCity">City<span className="text-danger">*</span></label>
                            <select id="inputCity" name="city" onChange={onValueChange} value={city} class="form-control">
                                <option className="selected">Select State</option>
                                <option >Mumbai</option>
                                <option>Noida</option>
                                <option>Vadodara</option>
                            </select>
                        </div>
                    </div>
                    <small id="help" class="form-text text-danger text-right">*required</small>                    
                    <button type="submit" class="btn btn-primary" disabled={disable}>Submit</button>
                    {error && 
                    <div class="alert alert-danger m-4" role="alert">
                        {error}
                    </div>}
                    
            </form>
            
            
        </div>
    )
}

export default RegisterCompany;
