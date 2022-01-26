import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import { Link } from "react-router-dom";

const BoardUser = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getUserBoard().then(
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
    <div className="container">
      <header className="jumbotron">
        {/* <h3>{content}</h3> */}
        <Link className="btn btn-info" to={`/withdraw`}>Withdraw</Link> <Link className="btn btn-info" to={`/deposit`}>Deposit</Link> <Link className="btn btn-info" to={`/registerpayee`}>RegisterPayee</Link> <Link className="btn btn-info" to={`/fundtransfer`}>FundTransfer</Link>  <hr/>
        <Link className="btn btn-info" to={`/accountstmt`}>Account Stmt</Link> <Link className="btn btn-info" to={`/registerbiller`}>Registerbiller</Link>  <Link className="btn btn-info" to={`/paymentstmt`}>Paymentstmt</Link> <br/>      
      </header>
    </div>
  );
};

export default BoardUser;
