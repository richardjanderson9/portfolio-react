/*
    Writen By Richard Anderson!
    Project: Personal Portfolio!
    Last Update: 9th May 2023.
    Social(s):
        LinkedIn: https://www.linkedin.com/in/richardjanderson9/
        Website: https://portfolio.richardjanderson.uk/
        GitHub: https://github.com/richardjanderson9/
*/

import React from 'react'; // Import React library!
import '../components/assets/css/App.css'; // Importing styles from the './App.css' file to use across components.
import footerData from './assets/data/Footer.json'; // Import the JSON data file containing links!

// Defines the Footer component!
const Footer = () => {
  return (
    <footer className="formatting-footer formatting-general">
      <div>
        <p>&copy; {footerData?.copyright?.year} {footerData?.copyright?.owner}. {footerData?.copyright?.message}.
        </p>
        <br />
        <p>
          <a className="formatting-links" href={footerData?.link?.url} target={footerData?.link?.openInNewTab ? "_blank" : "_self"} rel="noreferrer">{footerData?.link?.title}</a>
        </p>
      </div>
    </footer>
  );
};

  
export default Footer; // Export the component for use in other parts of the application!  