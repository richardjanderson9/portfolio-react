/*
    Writen By Richard Anderson!
    Project: Personal Portfolio!
    Last Update: 19th May 2023.
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
    <section className="block-general formatting-general">
      <h1 className="text-heading">{jsonData.title}</h1>
      <div className="formatting-cards">
        {jsonData.displayInfo.map(({ id, imageData, modalData, license }) => (
          <div className="col card-container" key={id}>
            <img src={imageData.url} alt={imageData.alt} width={imageData.width} height={imageData.height} className="formatting-cards-images"/>
            <br />
            <DisplayCard displayInfo={{ modalData, license }} buttonText={jsonData.buttonText} credlyLink={jsonData.credlyLink}/>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;

