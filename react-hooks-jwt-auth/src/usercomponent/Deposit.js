import React from 'react';

const Deposit = () => {
    return (
        <div>
                <form>
            <div class="form-group">
                <label for="balance">Balance:</label>
            </div>
            <div class="form-group">
                <label for="deposit">Enter deposit amount </label>
                <input type="text" class="form-control"  placeholder="amount"/>
            </div>
           
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Deposit;
