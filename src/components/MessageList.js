import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

function MessageList(props) {
    return(
        <ul className="message-list">{props.messageList.length ? props.messageList.map((msg, index) =>
            <li key={index}>
                <Message {...msg} />
            </li>
        ) :
        null}</ul>
    );
}

MessageList.propTypes = {
    messageList: PropTypes.array.isRequired
};

export default MessageList;
