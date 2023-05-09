/*
    Writen By Richard Anderson!
    Project: Personal Portfolio!
    Last Update: 9th May 2023.
    Social(s):
        LinkedIn: https://www.linkedin.com/in/richardjanderson9/
        Website: https://portfolio.richardjanderson.uk/
        GitHub: https://github.com/richardjanderson9/
*/

import aboutData from './assets/data/AboutMe.json'; // Import the JSON file for the component

const AboutMe = () => {
  return (
    <section className="block-general formatting-general text-general">
      <h1 className="text-heading">{aboutData.title}</h1>
      {aboutData.paragraphs.map((paragraph) => (
        <p className="text-information  text-compress" key={paragraph.number}>{paragraph.content}</p>
      ))}
    </section>
  );
};
  
export default AboutMe; // Export the component for use in other parts of the application!  