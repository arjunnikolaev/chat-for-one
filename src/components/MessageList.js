import React from 'react';
import PropTypes from 'prop-types';

function MessageList(props) {
    return(
        <ul className="message-list">{props.messageList.length ? props.messageList.map((msg, index) =>
            <li key={index}>
                <p className={'message message_' + msg.side}><b>{msg.username}</b><br/>
                    {msg.message}</p>
            </li>
        ) :
        null}</ul>
    );

}

export default MessageList;