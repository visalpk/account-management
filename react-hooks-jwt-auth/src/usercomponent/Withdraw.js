import React from 'react';

const Withdraw = () => {
    return (
        <div>
            <form>
            <div class="form-group">
                <label for="balance">Balance:</label>
            </div>
            <div class="form-group">
                <label for="withdraw">Enter withdraw amount </label>
                <input type="text" class="form-control"  placeholder="amount"/>
            </div>
           
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Withdraw;
