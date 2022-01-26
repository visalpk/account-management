import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import userService from "../services/user.service";
import React, { Component } from 'react';

function EditCustomer (props){
    const[title,setTitle] = useState("");
    const[fullname,setFullname] = useState("");
    const[email,setEmail] = useState("");
    const[dob,setDob] = useState("");
    const[mobile,setMobile] = useState("");
    const[pan,setPan] = useState("");
    const[aadhar,setAadhar] = useState("");
    const[approval, setApproval] = useState('');

    const history = useHistory();
     
    const {id} = useParams(props.id);
    
    const saveCustomer = (e) => {
        e.preventDefault();
        
        const customer = {id, title, fullname, email, dob, mobile, pan, aadhar, approval};
        if (id) {
            //update
            userService.update(customer)
                .then(response => {
                    console.log('Customer data updated successfully', response.data);
                    history.push('/');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                }) 
        } 

    }

    useEffect(() => {
        if (id) {
            userService.get(id)
                .then(customer => {
                   
                    setTitle(customer.data.title);
                    setFullname(customer.data.fullname);
                    setEmail(customer.data.email);
                    setDob(customer.data.dob);
                    setMobile(customer.data.mobile);
                    setAadhar(customer.data.aadhar);
                    setPan(customer.data.pan);
                    setApproval(customer.data.approval);
                   
       
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])
    return(
        <div className="container">
            
            <form>
                
                <div className="form-group">
                <label htmlFor="title">Title</label>
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}   
                        placeholder={"title"}                     
                    />

                </div>              
             
               <div className="form-group">
               <label htmlFor="fullname">Fulname</label>
                    <input
                  type="text"
                  className="form-control col-4"
                  name="fullname"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  placeholder={"fullname"}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control col-4"
                  name="email"
                  value={email}
                  placeholder={"email"}
                  onChange={(e) => setEmail(e.target.value)}
                  
                />
              </div>

              <div className="form-group">
                <label htmlFor="Date of Birth">D.O.B</label>
                <input
                  type="text"
                  className="form-control col-4"
                  name="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  
                  placeholder={"dd/mm/yy"}
                />
              </div>

              <div className="form-group">
                <label htmlFor="Mobile">Mobile Number</label>
                <input
                  type="text"
                  className="form-control col-4"
                  name="Mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  
                  placeholder={"mobilenumber"}
                />
              </div>
              <div className="form-group">
                <label htmlFor="pan">PAN</label>
                <input
                  type="text"
                  className="form-control col-4"
                  name="pan"
                  value={pan}
                  onChange={(e) => setPan(e.target.value)}
                  
                  placeholder={"XXXXX1234X"}
                />
              </div>
              <div className="form-group">
                <label htmlFor="aadhar">Aadhar</label>
                <input
                  type="text"
                  className="form-control col-4"
                  name="aadhar"
                  value={aadhar}
                  onChange={(e) => setAadhar(e.target.value)}
                  
                  placeholder={"12 digit aadhar number"}
                />
              </div>
              <div className="form-group">
                <label htmlFor="approval">Approval</label>
                <input
                  type="text"
                  className="form-control col-4"
                  name="approval"
                  value={approval}
                  onChange={(e) => setApproval(e.target.value)}
                  
                  placeholder={"Approval"}
                />
              </div>
               
                <div >
                    <button onClick={(e) => saveCustomer(e)} className="btn btn-primary">Save</button>
                </div>
            </form>
            <hr/>
           
        </div>
    )
}

export default EditCustomer;