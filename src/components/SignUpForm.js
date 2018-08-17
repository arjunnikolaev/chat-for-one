import React from 'react';
import PropTypes from 'prop-types';

class SignUpForm extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            email:'',
            error: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.username.trim() && this.state.email.trim() && this.state.password) {
            this.setState({
                username: '',
                email: '',
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
                <input autoComplete='off' className='input-field login' type="text" name="username" placeholder='Username' id='sign-up-username' value={this.state.username} onChange={this.handleChange}/><br/>
                <input type="email" className='input-field login' name="email" placeholder='Email' id='sign-up-email' value={this.state.email} onChange={this.handleChange}/><br/>
                <input className='input-field login' type="password" name="password" placeholder='Password' id='sign-up-password' value={this.state.password} onChange={this.handleChange}/><br/>
                <div className='buttons'>
                    <button className='btn' type="submit">
                        Sign Up
                    </button>
                </div>
                <p>{this.state.error || null}</p>
            </form>
        )
    }
}

export default SignUpForm;
