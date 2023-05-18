/*
    Written By Richard Anderson!
    Project: Personal Portfolio!
    Last Update: 18th May 2023.
    Social(s):
        LinkedIn: https://www.linkedin.com/in/richardjanderson9/
        Website: https://portfolio.richardjanderson.uk/
        GitHub: https://github.com/richardjanderson9/
*/

// Import necessary modules and styles!
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function DisplayCard({ buttonText, displayInfo }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="custom" onClick={handleShow}>
        {buttonText}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='formatting-modal-text'>{displayInfo.modalData.title} Certifications!</Modal.Title>
        </Modal.Header>
        <Modal.Body className='formatting-modal-text'>
          {Object.values(displayInfo.modalData.text).map((cert) => (
            <div key={cert.name} className='text-modal'>
              <p className='text-modal-setleft'>{cert.name}</p>
              <a className='text-modal-setright' href={cert.link} target="_blank" rel="noreferrer">Verify!</a>
            </div>
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DisplayCard;