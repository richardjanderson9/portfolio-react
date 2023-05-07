/*
    Writen By Richard Anderson!
    Project: Personal Portfolio!
    Last Update: 7th May 2023.
    Social(s):
        LinkedIn: https://www.linkedin.com/in/richardjanderson9/
        Website: https://portfolio.richardjanderson.uk/
        GitHub: https://github.com/richardjanderson9/
*/

// Importing styles from other files (CSS)!
import '../components/assets/css/App.css'; // Importing styles from the './App.css' file to use across components.

// Define the Projects component!
function Projects() {
    const data = ("Projects!");
    return (
      <div>
        <h1 className="block-general testing-outline">Loaded: {data}</h1>
      </div>
    );
  }
  
export default Projects; // Export the component for use in other parts of the application!  