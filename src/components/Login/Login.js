import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle,signInWithGithub} = useAuth();
    return (
        <div className='log-in'>
            <h2>Please Log In</h2>
            <button onClick={signInUsingGoogle}>Google Sign In</button>
            <br />
            <button onClick={signInWithGithub}>Github Sign In</button>
            <br />
            <Link to='/register'>New User</Link>
        </div>
    );
};

export default Login;