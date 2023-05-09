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
import { FaLinkedin } from 'react-icons/fa'; // Importing the LinkedIn icon from react-icons library!
import headerData from './assets/data/Header.json'; // Importing a JSON file that contains data to be displayed in the header!

//Define the Header component!
const Header = () => {
  const { heading, description, linkedin } = headerData;

  return (
    <div className="block-general formatting-general text-general">
      {heading.display && <h1 className="text-heading">{heading.text}</h1>}
      {description.display && <p className="text-information">{description.text}</p>}
      <a href={`${linkedin.url}${linkedin.username}`} className="header-button" target={linkedin.target} rel={linkedin.rel}>
        <FaLinkedin />
      </a>
    </div>
  );
};
  
export default Header; // Export the component for use in other parts of the application!  