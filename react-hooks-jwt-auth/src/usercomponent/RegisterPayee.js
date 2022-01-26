import React from 'react';

const Registerpayee = () => {
    return (
        <div>
             <form>
            <div class="form-group">
                <label for="balance">Enter Payee Name:</label>
                <input type="text" class="form-control"  placeholder="Payee Name"/>
           
            </div>
            <div class="form-group">
                <label for="withdraw">Enter Account Number </label>
                <input type="text" class="form-control"  placeholder="accountno"/>
            </div>
           
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Registerpayee;
