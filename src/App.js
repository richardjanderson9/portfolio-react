/*
    Writen By Richard Anderson!
    Project: Personal Portfolio!
    Last Update: 7th May 2023.
    Social(s):
        LinkedIn: https://www.linkedin.com/in/richardjanderson9/
        Website: https://portfolio.richardjanderson.uk/
        GitHub: https://github.com/richardjanderson9/
*/

// Importing the necessary React libraries.
import React from 'react';

// Importing components from other files (JSX)!
import NavBar from './components/NavBar'; // Headersection component.
import Header from './components/Header'; // Headersection component.
import AboutMe from './components/AboutMe'; // About Me section component.
import Certifications from './components/Certifications'; // Certifications section component.
import Projects from './components/Projects'; // Projects section component.
import Contact from './components/Contact'; // Contact section component.
import Footer from './components/Footer'; // Footer component.

// Importing styles from other files (CSS)!
import './components/assets/css/App.css'; // Importing styles from the './App.css' file to use across components.

// Create a component that displays the current date
function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <AboutMe />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App; // Export the component for use in other parts of the application

