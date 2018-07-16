import React from 'react';
import PropTypes from 'prop-types';

function Message(props) {
    return(
        <div className={'message message_' + props.side}>
            <b>{props.username}</b><br/>
            {props.message}
        </div>
    );
}

Message.propTypes = {
    side: PropTypes.string,
    username: PropTypes.string,
    message: PropTypes.string
};

export default Message;
