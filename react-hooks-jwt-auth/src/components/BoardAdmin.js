import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import { Link } from "react-router-dom";

const BoardAdmin = () => {
  const [content, setContent] = useState([]);
 
 useEffect(() => {
    UserService.getAdminBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);

  return (
    <div>
        <h1 className = "text-center"> Users List</h1><div className="container" >
        <table className = "table table-striped justify-content-start">
            <thead>
                <tr>

                    <td> Customer Id</td>
                    <td> Customer Title</td>
                    <td> Customer Full Name</td>
                    <td> Customer Email Id</td>
                    <td> Customer D.O.B</td>
                    <td> Customer Mobile</td>
                    <td> Customer PAN</td>
                    <td> Customer Aadhar</td>
                    <td> Approval</td>
                    <td> Action</td>


                </tr>

            </thead>
            <tbody>
                {
                   content.map(
                        user => 
                        <tr key = {user.id}>
                             <td> {user.id}</td>   
                             <td> {user.title}</td>   
                             <td> {user.fullname}</td>   
                             <td> {user.email}</td> 
                             <td> {user.dob}</td>   
                             <td> {user.mobile}</td>   
                             <td> {user.pan}</td>   
                             <td> {user.aadhar}</td> 
                             <td> {user.approval}</td> 
                             <td><Link className="btn btn-info" to={`/customer/edit/${user.id}`}>View</Link></td>
                            
                        </tr>
                    )
                }

            </tbody>
        </table>

    </div></div>

)
};

export default BoardAdmin;