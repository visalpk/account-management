import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthService from "../services/auth.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const validMobile = (value) => {
  let regrex=/[0-9]{10}/;
  if (!regrex.test(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        Enter valid mobile number
      </div>
    );
  }
};

const validPAN = (value) => {
  let regrex=/[A-Z]{5}[0-9]{4}[A-Z]{1}/;
  if (!regrex.test(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        Invalid PAN
      </div>
    );
  }
};

const validAadhar = (value) => {
    let regrex=/[0-9]{12}/;
    if (!regrex.test(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        Invalid Aadhar
      </div>
    );
  }
};

/* const vpassword = (value) => {

          if (value.length < 8 || value.length > 12 ) {
          return (
          <div className="alert alert-danger" role="alert">
          The password must be between 8 and 12 characters
          </div>
          );
          }
          if (value.search(/[a-z]/i) < 0) {
          return (
          <div className="alert alert-danger" role="alert">
          Your password must contain at least one small letter.</div>
          );
          }
          if (value.search(/[0-9]/) < 0) {
          return (
          <div className="alert alert-danger" role="alert">
          Your password must contain at least one digit.</div>
          );
          }
          if (value.search(/[!@#$%^&*]/i) < 0) {
          return (
          <div className="alert alert-danger" role="alert">
          Your password must contain at least one special character.</div>
          );
          }
          if (value.search(/[A-Z]/) < 0) {
          return (
          <div className="alert alert-danger" role="alert">
          Your password must contain at least one capital letter.</div>
          );
          }
  
};*/ 

const Signup = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [dob, setDob] = useState("");
  const [mobile, setMobile] = useState("");
  const [pan, setPan] = useState("");
  const [aadhar, setAadhar] = useState("");
  
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangeTitle = (e) => {
    const title = e.target.value;
    setTitle(title);
  };

  const onChangedob = (e) => {
    const dob = e.target.value;
    setDob(dob);
  };
  const onChangemobile = (e) => {
    const mobile = e.target.value;
    setMobile(mobile);
  };

  const onChangepan = (e) => {
    const pan = e.target.value;
    setPan(pan);
  };

  const onChangeaadhar = (e) => {
    const aadhar = e.target.value;
    setAadhar(aadhar);
  };

  
 
  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register2(username, email, title, dob, mobile, pan, aadhar).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <select name="title" className='form-control' onChange={onChangeTitle}
                  validations={[required]}>
                  <option value={title} selected>Mr</option>
                  <option value={title}>Mrs</option>
                  <option value={title}>Ms</option></select>
              </div>
             
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <Input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
                  validations={[required, vusername]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Input
                  type="text"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Date of Birth">D.O.B</label>
                <Input
                  type="date"
                  className="form-control"
                  name="date"
                  value={dob}
                  onChange={onChangedob}
                  validations={[required]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="Mobile">Mobile Number</label>
                <Input
                  type="text"
                  className="form-control"
                  name="Mobile"
                  value={mobile}
                  onChange={onChangemobile}
                  validations={[required, validMobile]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="pan">PAN</label>
                <Input
                  type="text"
                  className="form-control"
                  name="pan"
                  value={pan}
                  onChange={onChangepan}
                  validations={[required, validPAN]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="aadhar">Aadhar</label>
                <Input
                  type="text"
                  className="form-control"
                  name="aadhar"
                  value={aadhar}
                  onChange={onChangeaadhar}
                  validations={[required, validAadhar]}
                />
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-block">Sign Up</button>
              </div>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default Signup;
