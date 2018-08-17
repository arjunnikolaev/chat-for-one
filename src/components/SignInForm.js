import React from 'react';
import PropTypes from 'prop-types';

class SignInForm extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            error: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.username.trim() && this.state.password) {
            this.setState({
                username: '',
                password: '',
                error: ''
            });
        } else {
            this.setState({
                error: 'Error! Empty fields'
            });
        }
        console.log(this.state.password);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input autoComplete='off' className='input-field login' type="text" name="username" id='sign-in-username' placeholder='Username' value={this.state.username} onChange={this.handleChange}/><br/>
                <input className='input-field login' type="password" name="password" id='sign-in-password' placeholder='Password' value={this.state.password} onChange={this.handleChange}/><br/>
                <div className='buttons'>
                    <button className='btn' type="submit">
                        Sign In
                    </button>
                </div>
                <p>{this.state.error || null}</p>
            </form>
        )
    }
}

export default SignInForm;
