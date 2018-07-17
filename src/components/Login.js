import React from 'react';
import PropTypes from 'prop-types';

function Login(props) {
    return(
        <div>
            <input className='txt-email' type='email' placeholder='Email'/>
            <input className='txt-password' type='password' placeholder='Password'/>
            <button className='btn btn-login'>Log In</button>
            <button className='btn btn-signup'>Sign Up</button>
            <button className='btn btn-logout hidden'>Log Out</button>
        </div>
    );
}

Login.propTypes = {

};

export default Login;