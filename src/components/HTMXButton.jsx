import React from 'react';

/**
 * HTMXButton component renders a button that uses HTMX to fetch data from the server.
 * The button has an hx-get attribute to specify the endpoint and an hx-target attribute
 * to specify where the response should be rendered.
 */
function HTMXButton() {
    return (
        <button hx-get="https://jsonplaceholder.typicode.com/todos/1" hx-target="#message">
        Fetch Message
        </button>
    );
}

export default HTMXButton;