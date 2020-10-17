import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { countriesList,searchCompanyList } from "../../apicalls";

const CompanyList = () => {
    
    
    const [searchList,setSearchList]=useState([]);
    const [error,setError]=useState(null);
    const [postPerPage,setPostPerPage]=useState(5);
    const [firstIndex,setFirstIndex]=useState(0);
    const [lastIndex,setLastIndex]=useState(5);
    const [search,setSearch]=useState('');

    useEffect(()=>{
        countriesList()
            .then(data=>{
                setSearchList(data);
                setError(false)
                
            })
            .catch(error=>
                setError(error)
            )   
    },[])

    

    var currentCompanyList=searchList.slice(firstIndex,lastIndex);

    const onSearchChange=(e)=>{
        setSearch(e.target.value)
        if(search===''){
            countriesList()
            .then(data=>{
                setSearchList(data);
                setError(false)
            })
            .catch(error=>
                setError(error)
            )  
        }
        else{
            searchCompanyList({companyName:search})
            .then(data=>{
                setSearchList(data)
                setError(false)
            })
            .catch(err=>setError(err))
        }
        
        
    }

    const onNextPage=e=>{
        e.preventDefault();
        setFirstIndex(firstIndex+5);
        setLastIndex(lastIndex+5);
    }
    const onPreviousPage=e=>{
        e.preventDefault();
        setFirstIndex(firstIndex-5);
        setLastIndex(lastIndex-5);
    }

    const load=()=>{
        searchCompanyList({companyName:search})
            .then(data=>{
                setSearchList(data)
            })
            .catch(err=>setError(err))
    }
    

    return (
        
        <div style={{padding:"20px 50px"}}>
            
            <Link to="/registerCompany">
                <button className="btn btn-primary" style={{position:"absolute",top:"30px",right:"30px"}}>Resigter Company</button>
            </Link>
            
            {
                error ? 
                <div>
                    <div class="alert alert-danger" role="alert">
                        A simple danger alert—check it out!
                    </div>
                </div>

                :
                <div>
                    <h4 className="text-center">Company List</h4>
            <div class="d-flex justify-content-center align-items-center">
                <input class="form-control"  value={search} onChange={onSearchChange} type="text" placeholder="Search" aria-label="Search" 
                style={{border:"none",outline:"none",borderBottom:"1px solid grey",width:"70%"}} />
            </div>
            <div className="mt-4">
                <div class="list-group">
                    {
                        currentCompanyList.map(company=>(
                            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                                <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">{`${company.companyName}`}</h5>
                                <small>{`${company.email} ( ${company.number})`}</small>
                                </div>
                                <small>{company.companyDesc}</small>
                                <br/>
                                <small>{`${company.address} ( ${company.city}, ${company.state})`}</small>
                            </a>
                        ))
                        
                    }
                    
                    
                </div>
            </div>
            <div className="d-flex justify-content-center my-4">
                <nav aria-label="...">
                    <ul class="pagination" style={{cursor:"pointer"}}>
                        { (lastIndex>postPerPage) && (
                            <li class="page-item" onClick={onPreviousPage} >
                                <span class="page-link">Previous</span>
                            </li>
                        )}
                        
                        
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        { (searchList.length>=lastIndex) && (
                            <li class="page-item" onClick={onNextPage}  style={{cursor:"pointer"}} >
                                <span class="page-link">Next</span>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>

                    </div>
                
            }

            
        </div>
    )
}


export default CompanyList
