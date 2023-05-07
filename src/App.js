/*
    Writen By Richard Anderson!
    Project: Personal Portfolio!
    Last Update: 7th May 2023.
    Social(s):
        LinkedIn: https://www.linkedin.com/in/richardjanderson9/
        Website: https://portfolio.richardjanderson.uk/
        GitHub: https://github.com/richardjanderson9/
*/

import React from 'react';

// Create a component that displays the current date
function App() {
  const currentDate = new Date().toLocaleDateString(); // Get the current date in localized string format
  return <div><h1>Current Date: {currentDate}</h1></div>; // Render the date inside an h1 tag using JSX
}

export default App; // Export the component for use in other parts of the application
