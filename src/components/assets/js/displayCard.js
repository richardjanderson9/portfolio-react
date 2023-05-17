/*
    Writen By Richard Anderson!
    Project: Personal Portfolio!
    Last Update: 17th May 2023.
    Social(s):
        LinkedIn: https://www.linkedin.com/in/richardjanderson9/
        Website: https://portfolio.richardjanderson.uk/
        GitHub: https://github.com/richardjanderson9/
*/

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.css';

function DisplayCard({ buttonText, modalTitle, modalContent }) {
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
          <Modal.Title className='formatting-modal'>{modalTitle} Certifications!</Modal.Title>
        </Modal.Header>
        <Modal.Body className='formatting-modal'>{modalContent}</Modal.Body>
      </Modal>
    </>
  );
}

export default DisplayCard;
