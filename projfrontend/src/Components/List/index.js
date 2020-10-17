import React from 'react'

const List = (props) => {
    return (
        {console.log(props)}
        <div className="mt-4">
            <div class="list-group">
                {
                    companyList.map(company=>(
                        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                            <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">{`${company.companyName}`}</h5>
                            <small>{`${company.email} ( ${company.number})`}</small>
                            </div>
                            <p>{company.companyDesc}</p>
                            <small>{`${company.address} ( ${company.city}, ${company.state})`}</small>
                        </a>
                    ))
                }
                
                
            </div>
        </div>
    )
}

export default List;
