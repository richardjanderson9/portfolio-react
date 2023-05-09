/*
    Writen By Richard Anderson!
    Project: Personal Portfolio!
    Last Update: 9th May 2023.
    Social(s):
        LinkedIn: https://www.linkedin.com/in/richardjanderson9/
        Website: https://portfolio.richardjanderson.uk/
        GitHub: https://github.com/richardjanderson9/
*/

// Importing styles from other files (CSS)!
import '../components/assets/css/App.css'; // Importing styles from the './App.css' file to use across components.

const Footer = () => {
  return (
    <footer className="formatting-footer formatting-general">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p>&copy; {new Date().getFullYear()} Richard Anderson. All rights reserved.</p>
            <br />
            <p><a className="formatting-links" href='https://github.com/richardjanderson9/portfolio-react' target='_blank'>🔗 Source Code! 🔗</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

  
export default Footer; // Export the component for use in other parts of the application!  