import React from 'react';

/**
 * MessageDisplay component renders a div with an id of "message" where the response
 * from the server will be displayed. This component works with HTMX to dynamically
 * update its content.
 */
function MessageDisplay() {
    return <div id="message"></div>;
}

export default MessageDisplay;