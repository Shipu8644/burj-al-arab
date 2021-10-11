import React from 'react';
import useAuth from '../../hooks/useAuth';

import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className='login'>
            <h1>This is Login</h1>
            <button onClick={signInUsingGoogle}>Sign In With Google</button>
        </div>
    );
};

export default Login;