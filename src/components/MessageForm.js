import React from 'react';
import PropTypes from 'prop-types';

class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            message: '',
            error: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.username && this.state.message) {
            this.props.addMessage({username: this.state.username, message: this.state.message});
            this.setState({
                username: '',
                message: '',
                error: ''
            });
        } else {
            this.setState({
                error: 'Error! Empty input.'
            });
        }
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>
                    <label htmlFor="username">
                        Name:
                    </label>
                    <br/>
                    <input type="text" name="username" id='username' value={this.state.username} onChange={this.handleChange}/>
                </p>
                <p>
                    <label htmlFor="message">
                        Message:
                    </label>
                    <br/>
                    <textarea rows='5' cols='45' id='message' name="message" value={this.state.message} onChange={this.handleChange}></textarea>
                </p>
                <input type="submit" value="Send"/>

            </form>
        )
    }
}

MessageForm.propTypes = {
    listLength: PropTypes.number.isRequired,
    addMessage: PropTypes.func.isRequired,
    clearMessages: PropTypes.func.isRequired
};

export default MessageForm;