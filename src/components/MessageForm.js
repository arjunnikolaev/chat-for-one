import React from 'react';
import PropTypes from 'prop-types';

class MessageForm extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            message: '',
            error: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.chooseSide = this.chooseSide.bind(this);
    }

    chooseSide(name) {
        let list = this.props.messageList;
        if(list.length) {
            let firstMsg = list.find((item) => item.username === name);
            if(firstMsg) {
                return firstMsg.side;
            } else {
                return list[list.length - 1].side === 'left' ? 'right' : 'left';
            }
        }
        return 'left';
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.username && this.state.message) {
            let side = this.chooseSide(this.state.username);
            this.props.addMessage({username: this.state.username, message: this.state.message, side: side, time: new Date().toLocaleTimeString().slice(0, -6)});
        } else {
            this.setState({
                error: 'Error! Empty input.'
            });
        }
        this.setState({
            username: '',
            message: '',
            error: ''
        });
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
                    <input className='input-field' type="text" name="username" id='username' value={this.state.username} onChange={this.handleChange}/>
                </p>
                <p>
                    <label htmlFor="message">
                        Message:
                    </label>
                    <br/>
                    <textarea className='input-field' rows='5' cols='35' id='message' name="message" value={this.state.message} onChange={this.handleChange}></textarea>
                </p>
                <div className='buttons'>
                    <button className='btn' type="submit">
                        <span>Send</span>
                        <img width='20' height='20' src={require('../media/mail.png')}/>
                    </button>
                </div>
                <p>{this.state.error || null}</p>
            </form>
        )
    }
}

MessageForm.propTypes = {
    messageList: PropTypes.array.isRequired,
    addMessage: PropTypes.func.isRequired
};

export default MessageForm;