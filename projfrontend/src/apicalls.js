import {API} from "./API";

export const submitFormDetail = list => {
    return fetch(`${API}/create`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(list)
    })
      .then(res => {
        return res.json();
      })
      .catch(err =>({error:err}));
  };
  
export const countriesList=()=>{
    return fetch(`${API}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        },
    })
    .then(res=>{
        return res.json();
    })
    .catch(err=>{
      return {error:err}
    });
}

export const searchCompanyList=data=>{
  return fetch(`${API}/all`,{
    method:"POST",
    headers:{
      Accept: "application/json",
      "Content-Type":"application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res=>{
    return res.json();
  })
  .catch(err=>({error:err}));
}