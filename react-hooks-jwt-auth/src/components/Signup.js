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
const Signup = (props) => {
  const form = useRef();
  const checkBtn = useRef();
 
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("Mr");
  const [dob, setDob] = useState("");
  const [mobile, setMobile] = useState("");
  const [pan, setPan] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [approval, setApproval] = useState("0");
  
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");


  const onChangeUsername = (e) => {
    const fullname = e.target.value;
    setFullname(fullname);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
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

 
 
  const [addrtype, setAddrtype] = useState(["Mr", "Ms", "Mrs"])
  const Add = addrtype.map(Add => Add  )
  
  const handleAddrTypeChange = (e) => {
    let x=addrtype[e.target.value]
    setTitle(x)}
  
  
 
  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      console.log()
      AuthService.register2(title, fullname, email,  dob, mobile, pan, aadhar, approval).then(
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
              <div className="form-group  ">
                <label htmlFor="title">Title</label>
                
                < select  name="title" validations={[required]}
                onChange={e => handleAddrTypeChange(e)}
                className="form-control" >
                {
                  Add.map((address, key) => <option value={key}>{address}</option>)
                }
              </select >
              </div>
             
               <div className="form-group">
                <label htmlFor="fullname">Username</label>
                <Input
                  type="text"
                  className="form-control"
                  name="fullname"
                  value={fullname}
                  onChange={onChangeUsername}
                  placeholder={"fullname"}
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
                  placeholder={"Eg. abc@hotmail.com"}
                  validations={[required, validEmail]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="Date of Birth">D.O.B</label>
                <Input
                  type="text"
                  className="form-control"
                  name="date"
                  value={dob}
                  onChange={onChangedob}
                  placeholder={"dd/mm/yy"}
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
                  placeholder={"mobilenumber"}
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
                  placeholder={"XXXXX1234X"}
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
                  placeholder={"12 digit aadhar number"}
                  validations={[required, validAadhar]}
                />
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-block" >Sign Up</button>
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
