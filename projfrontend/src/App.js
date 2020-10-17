import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CompanyList from "./Components/CompanyList";
import RegisterCompany from "./Components/RegisterCompany";

const App = () => {

    
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={CompanyList}></Route>
                <Route path="/registerCompany" exact component={RegisterCompany}></Route>
            </Switch>
        </Router>
    )
    
}

export default App;
