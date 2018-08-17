import React from 'react';
import ChatHeader from '../components/ChatHeader';
import MessageForm from '../components/MessageForm';
import MessageList from '../components/MessageList';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from '../ducks/msg/selectors';
import * as actions from '../ducks/msg/actions';
import {enableListFetching, addMsg } from "../config";
import SignUpForm from '../components/SignUpForm';
import SignInForm from '../components/SignInForm';

class AppContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            time: new Date().toLocaleTimeString()
        };
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        enableListFetching(this.props.fetchMessages);
        this.timeId = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearTimeout(this.timeId);
    }

    tick() {
        this.setState({
            time: new Date().toLocaleTimeString()
        });
    }

    render() {
        return (
            <div>
                <SignUpForm/>
                <SignInForm/>
                <ChatHeader time={this.state.time}/>
                <MessageList messageList={this.props.messageList}/>
                <MessageForm addMessage={addMsg} messageList={this.props.messageList}/>
            </div>
        );
    }
}

AppContainer.defaultProps = {
    messageList: []
};

const mapStateToProps = (state) => ({
    messageList: selectors.selectMessages(state)
});

const mapDispatchToProps = {
    fetchMessages: actions.fetchMessages
};

AppContainer.propTypes = {
    fetchMessages: PropTypes.func.isRequired,
    messageList: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
