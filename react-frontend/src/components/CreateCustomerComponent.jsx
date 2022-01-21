import React, { Component } from 'react'
import CustomerService from '../services/CustomerService';
import { Link } from 'react-router-dom';
import '../Login.css';

class CreateCustomerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            appid: '_add',
            title:'',
            fullName: '',
            emailId: '',
            dob: '',
            mobile:'',
            pan:'',
            aadhar:'',
        }
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeFullNameHandler = this.changeFullNameHandler.bind(this);       
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeDobHandler = this.changeDobHandler.bind(this);
        this.changeMobileHandler = this.changeMobileHandler.bind(this);       
        this.changePanHandler = this.changePanHandler.bind(this);               
        this.changeAadharHandler = this.changeAadharHandler.bind(this);
        this.saveOrUpdateCustomer = this.saveOrUpdateCustomer.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.appid === '_add'){
            return
        }else{
            CustomerService.getCustomerById(this.state.appid).then( (res) =>{
                let customer = res.data;
                this.setState({
                    title: customer.title,
                    fullName: customer.fullName,
                    emailId : customer.emailId,
                    dob: customer.dob,
                    mobile: customer.mobile,
                    pan: customer.pan,
                    aadhar: customer.aadhar,
                });
            });
        }        
    }
    saveOrUpdateCustomer = (e) => {
        e.preventDefault();
        let customer = {
            title: this.state.title,
            fullName: this.state.fullName,
            emailId: this.state.emailId,
            dob: this.state.dob,
            mobile: this.state.mobile,
            pan: this.state.pan,
            aadhar: this.state.aadhar };
            console.log('customer => ' + JSON.stringify(customer));

        // step 5
        if(this.state.appid === '_add'){
            CustomerService.createCustomer(customer).then(res =>{
                this.props.history.push('/customers');
            });
        }
    }
    
    changeTitleHandler= (event) => {
        this.setState({title: event.target.value});
    }

    changeFullNameHandler= (event) => {
        this.setState({fullName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }
    changeDobHandler= (event) => {
        this.setState({dob: event.target.value});
    }
    changeMobileHandler= (event) => {
        this.setState({mobile: event.target.value});
    }
    changePanHandler= (event) => {
        this.setState({pan: event.target.value});
    }
    changeAadharHandler= (event) => {
        this.setState({aadhar: event.target.value});
    }

    cancel(){
        this.props.history.push('/customers');
    }

    getTitle(){
        if(this.state.appid === '_add'){
            return <h3 className="text-center">New User Registration</h3>
        }else{
            return <h3 className="text-center">Update User Registration</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   
                            <div className = "auth-wrapper auth-inner margintop">
                                {
                                    this.getTitle()
                                }
                                <div >
                                    <form>
                                        <div className = "form-group">
                                            <label> Title: </label>
                                            <input placeholder="Mr/Ms/Mrs" name="title" className="form-control" 
                                                value={this.state.title} onChange={this.changeTitleHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Full Name: </label>
                                            <input placeholder="Full Name" name="fullName" className="form-control" 
                                                value={this.state.fullName} onChange={this.changeFullNameHandler}/>
                                        </div>                                        
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> DOB: </label>
                                            <input  type="date" name="dob" className="form-control" 
                                                value={this.state.dob} onChange={this.changeDobHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Mobile: </label>
                                            <input placeholder="Mobile number" name="mobile" className="form-control" 
                                                value={this.state.mobile} onChange={this.changeMobileHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> PAN: </label>
                                            <input placeholder="PAN" name="lastName" className="form-control" 
                                                value={this.state.pan} onChange={this.changePanHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Aadhar: </label>
                                            <input placeholder="Aadhar" name="aadhar" className="form-control" 
                                                value={this.state.aadhar} onChange={this.changeAadharHandler}/>
                                        </div>


                                        <button className="btn btn-success" onClick={this.saveOrUpdateCustomer}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                        <p className="forgot-password text-right">
                                            Already registered <Link  to="/">  Login?</Link>
                                        </p>
                                                            </form>
                                </div>
                            

                   </div>
            </div>
        )
    }
}

export default CreateCustomerComponent