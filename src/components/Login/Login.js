import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const redirect = location.state?.from || '/home';
    const history = useHistory();
    const handleRedirect = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect)
            })
    }
    return (
        <div className='login'>
            <h1>This is Login</h1>
            <button onClick={handleRedirect}>Sign In With Google</button>
        </div>
    );
};

export default Login;