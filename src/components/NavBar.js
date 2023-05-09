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
import './assets/css/Navbar.css'; // Import styles from the './Navbar.css' file!
import linksData from './assets/data/NavbarLinks.json'; // Import the JSON data file containing links!

const Navbar = () => {
  let { links } = linksData;

  return (
    <nav className="navbar formatting-general">
      <ul className="navbar-list">
        {links.map(({ url, openInNewTab, title }, index) => (
          <li className="navbar-item" key={index}>
            <a
              href={url}
              className="navbar-link"
              target={openInNewTab ? '_blank' : '_self'}
              rel={openInNewTab ? 'noopener noreferrer' : ''}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
