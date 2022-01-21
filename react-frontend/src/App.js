import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListCustomerComponent from './components/ListCustomerComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateCustomerComponent from './components/CreateCustomerComponent';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
             
                <div className="container">
                    <Switch>
                        <Route path = "/" exact component = {Login}></Route>                         
                          <Route path = "/list" exact component = {ListCustomerComponent}></Route>
                          <Route path = "/customers" component = {ListCustomerComponent}></Route>
                          <Route path = "/add-customer/:id" component = {CreateCustomerComponent}></Route>
                          <Route path = "/signup" component = {Signup}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
