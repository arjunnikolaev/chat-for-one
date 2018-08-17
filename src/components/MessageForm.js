import React from 'react';
import PropTypes from 'prop-types';

class MessageForm extends React.Component {
    constructor() {
        super();
        this.state = {
            username: 'Arjun',
            message: '',
            error: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.chooseSide = this.chooseSide.bind(this);
        this.handleMessageKeypress = this.handleMessageKeypress.bind(this);
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
        if(this.state.message.trim()) {
            let side = this.chooseSide(this.state.username);
            this.props.addMessage({username: this.state.username.trim(), message: this.state.message.trim(), side: side, time: new Date().toLocaleTimeString().slice(0, -6)});
            this.setState({
                username: 'Arjun',
                message: '',
                error: ''
            });
        } else {
            this.setState({
                error: 'Error!'
            });
        }

    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleMessageKeypress(e) {
        if(e.key === 'Enter') {
            e.preventDefault();
            if(e.ctrlKey) {
                console.log('yes');
                this.setState((prevState, props) => ({
                    message: prevState.message + '\n'
                }));
            } else {
                this.handleSubmit(e);
            }
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>
                    <textarea onKeyPress={this.handleMessageKeypress} className='input-field msg' rows='5' cols='35' id='message' name="message" placeholder='Type your message' value={this.state.message} onChange={this.handleChange}></textarea>
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