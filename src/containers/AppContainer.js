import React from 'react';
import ChatHeader from '../components/ChatHeader';
import MessageForm from '../components/MessageForm';
import MessageList from '../components/MessageList';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as selectorsMsg from '../ducks/msg/selectors';
import * as actionsMsg from '../ducks/msg/actions';
import * as selectorsAuth from '../ducks/auth/selectors';
import * as actionsAuth from '../ducks/auth/actions';
import {enableListFetching, addMsg } from "../config";

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
    user: selectorsAuth.selectUser(state),
    isAuth: selectorsAuth.selectIsAuth(state),
    messageList: selectorsMsg.selectMessages(state)
});

const mapDispatchToProps = {
    logIn: actionsAuth.logIn,
    logOut: actionsAuth.logOut,
    fetchMessages: actionsMsg.fetchMessages
};

AppContainer.propTypes = {
    messageList: PropTypes.array.isRequired,
    isAuth: PropTypes.bool.isRequired,
    user: PropTypes.string.isRequired,
    fetchMessages: PropTypes.func.isRequired,
    logIn: PropTypes.func.isRequired,
    logOut: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
