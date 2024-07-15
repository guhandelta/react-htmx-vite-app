import React from 'react';
import { HTMXButton, MessageDisplay } from './components';

/**
 * App component is the main component that renders the HTMXButton and MessageDisplay components.
 */
function App() {
  return (
    <div>
      <h1>Hello, React + HTMX!</h1>
      <HTMXButton />
      <MessageDisplay />
    </div>
  );
}
export default App;