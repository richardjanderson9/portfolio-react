/*
    Writen By Richard Anderson!
    Project: Personal Portfolio!
    Last Update: 25th May 2023.
    Social(s):
        LinkedIn: https://www.linkedin.com/in/richardjanderson9/
        Website: https://portfolio.richardjanderson.uk/
        GitHub: https://github.com/richardjanderson9/
*/

import React from "react";
import certificationsData from "./assets/data/Certifications.json";
import DisplayCard from "./assets/js/displayCard";

function Certifications() {
  const jsonData = certificationsData;

  return (
    // Render a section with general block and formatting classes
    <section className="block-general formatting-general">
      {/* Render the title from the jsonData object */}
      <h1 className="text-heading">{jsonData.title}</h1>
      {/* Render a div for formatting cards */}
      <div className="formatting-cards">
        {/* Map over the displayInfo array in the jsonData object */}
        {jsonData.displayInfo.map(({ id, imageData, modalData, license }) => {
          let verifyLink = jsonData.credlyLink;
  
          // Check if the modalData title is "Microsoft"
          if (modalData.title === "Microsoft") {
            // If it is, update the verifyLink to the Microsoft link from jsonData
            verifyLink = jsonData.microsoftLink;
          }
  
          // Render a column div for each card with a unique key
          return (
            <div className="col card-container" key={id}>
              {/* Render the image with url, alt, width, and height from imageData */}
              <img src={imageData.fileName + jsonData.imageFormat} alt={imageData.alt} width={imageData.width} height={imageData.height} className="formatting-cards-images"/>
              <br />
              {/* Render the DisplayCard component with modalData, license, buttonText, and verifyLink */}
              <DisplayCard displayInfo={{ modalData, license }} buttonText={jsonData.buttonText} verifyLink={verifyLink}/>
            </div>
          );
        })}
      </div>
    </section>
  );
  
}

export default Certifications;

