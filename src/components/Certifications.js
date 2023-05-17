/*
    Writen By Richard Anderson!
    Project: Personal Portfolio!
    Last Update: 17th May 2023.
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
    <section className="block-general formatting-general text-general">
      <h1 className="text-heading">{jsonData.title}</h1>
      <div>
        {jsonData.displayInfo.map(({ id, imageData, modalData }) => (
          <div key={id}>
            <img src={imageData.url} alt={imageData.alt}/>
            <br />
            <DisplayCard buttonText={jsonData.buttonText} modalTitle={modalData.title} modalContent={modalData.text} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
