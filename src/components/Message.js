import React from 'react';
import PropTypes from 'prop-types';

function Message(props) {
    return(
        <div className={'message message_' + props.side}>
            <b>{props.username}</b><br />
            <div className='message__body'>{props.message}<span className='time-span'>{props.time}</span></div>
        </div>
    );
}

Message.propTypes = {
    side: PropTypes.string,
    username: PropTypes.string,
    message: PropTypes.string,
    time: PropTypes.string
};

export default Message;
