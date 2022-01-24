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
        this.changeHandler = this.changeHandler.bind(this);
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
    
    changeHandler(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
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
                                                value={this.state.title} onChange={this.changeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Full Name: </label>
                                            <input placeholder="Full Name" name="fullName" className="form-control" 
                                                value={this.state.fullName} onChange={this.changeHandler}/>
                                        </div>                                        
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> DOB: </label>
                                            <input  type="date" name="dob" className="form-control" 
                                                value={this.state.dob} onChange={this.changeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Mobile: </label>
                                            <input placeholder="Mobile number" name="mobile" className="form-control" 
                                                value={this.state.mobile} onChange={this.changeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> PAN: </label>
                                            <input placeholder="PAN" name="pan" className="form-control" 
                                                value={this.state.pan} onChange={this.changeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Aadhar: </label>
                                            <input placeholder="Aadhar" name="aadhar" className="form-control" 
                                                value={this.state.aadhar} onChange={this.changeHandler}/>
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