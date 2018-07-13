import React from 'react';
import ChatHeader from '../components/ChatHeader';
import MessageForm from '../components/MessageForm';
import MessageList from '../components/MessageList';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from '../ducks/msg/selectors';
import * as actions from '../ducks/msg/actions';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString()
        };
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
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
                <MessageForm addMessage={this.props.addMessage} messageList={this.props.messageList} clearMessages={this.props.clearMessages}/>
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
    addMessage: actions.addNewMessage,
    clearMessages: actions.clearMessageList
};

AppContainer.propTypes = {
    messageList: PropTypes.array.isRequired,
    addMessage: PropTypes.func.isRequired,
    clearMessages: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);