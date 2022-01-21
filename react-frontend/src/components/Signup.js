import ReactDOM from 'react-dom';
import '../Login.css';
import React, { useState } from "react";

import { Link } from 'react-router-dom';
//working with forms

export default function Signup(props) {

  const[fname,setfname] = useState("");
  const[lname,setlname] = useState("");
  const[email,setemail] = useState("");
  const[pwd,setpwd] = useState("");
  const[bday,setbday] = useState("");
  const[gen,setgender] = useState("");
 
  const changeHandler =(event) =>{
    var val=event.target.value;
      if(event.target.name=="fname")
      {
        setfname(val);
      }else if (event.target.name=="lname"){
        setlname(val);
      }else if (event.target.name=="email"){
        setemail(val);
      }else if (event.target.name=="pwd"){
          setpwd(val);
      }else if (event.target.name=="birthday"){
        setbday(val);
    }else if (event.target.name=="gender"){
      setgender(val);
  }

  }

  const handleSubmit = () =>{
   
    alert(fname+" "+lname+" "+email+" "+pwd+" "+bday+" "+gen)
  }
        return (<div className="App auth-wrapper auth-inner margintop">
        
         
            <form onSubmit={handleSubmit} >
                <h3>Sign Up</h3>
                
                <div className="form-group">
                    <label>First name</label>
                    <input name="fname" type="text" onChange={changeHandler}  className="form-control" placeholder="First name"  />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input name="lname" type="text" onChange={changeHandler}  className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input name="email" type="email"  onChange={changeHandler} className="form-control" placeholder="Enter email"  />
                </div>             

                <div className="form-group">
                    <label>Password</label>
                    <input name="pwd" type="password"  onChange={changeHandler} className="form-control" placeholder="Enter password"   />
                </div>

                <div className="form-group">
                    <label >Birthday:</label><br/>
                    <input name="birthday" type="date"  onChange={changeHandler} className="form-control"  className='mar10' />
                </div>

                <div className="form-group mar"  onChange={changeHandler}>
                                <label > Select you gender</label><br/>
                <select name="gender" className='mar10'>
                  <option value="none" selected>Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">other</option>
                </select></div>

                <button type="submit" className="btn btn-primary btn-block pad dbutton">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <Link to="/"> Login?</Link>
                </p>
            </form></div>
        );
    
}

