import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <form action="">
                <input type="email" name="" id="" />
                <br />
                <input type="password" name="" id="" />
                <br/>
                <input type="submit" value="Submit" />
                <br />
                <Link to="/login">Already Registered?</Link>
            </form>
        </div>
    );
};

export default Register;