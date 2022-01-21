import '../Login.css';
import React, { useState } from "react";
import { Link } from 'react-router-dom';
//working with forms

  

export default function Login(props) {
  
  const initialFormstate={email:'',pwd:''};
  const[user,setUser]= useState(initialFormstate); 

  const changeHandler =(event) =>{
    const {name,value}=event.target;
    setUser({...user,[name]:value});
  }
  
  const invaliddata =()=>{
    document.getElementById("message").style.display = "none";
    console.log("called")
  }
    
   
  
        
        
        return (
          
        
        <div  onLoad={invaliddata} className="auth-wrapper auth-inner margintop">      
         
            <form  >
                <h3>Login Up</h3>
                
               
                <div className="form-group">
                    <label>Email address</label>
                    <input name="email" type="email"  onChange={changeHandler} className="form-control" placeholder="Enter email"  />
                </div>             

                <div className="form-group">
                    <label>Password</label>
                    <input name="pwd" type="password"  onChange={changeHandler} className="form-control" placeholder="Enter password"   />
                </div>

               

                <button type="submit" className="btn btn-primary btn-block pad dbutton" >Login</button>
              
                <p className="forgot-password text-right">
                    New to site <Link to="/add-customer/:id"> signup?</Link>
                </p>
            </form></div>

           

        );
    
}


  

