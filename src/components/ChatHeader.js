import React from 'react';

function ChatHeader(props) {
    return (
        <div>
            <h1>ChatForOne</h1>
            <p>Welcome to the chat!</p>
            <p>{props.time}</p>
        </div>
    );
}

export default ChatHeader;