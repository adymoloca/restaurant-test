import React, { useState } from 'react';
import './NewNotificationModalSucces.css';
import Modal from 'react-bootstrap/Modal';
import MailSent from '../../../../assets/MailSent.png';

function NewNotificationModalSucces(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow}>Send</div>

      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        className="modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="container-fluid">
              <div className="modal-title text-center">
                Your message has successfully been sent!
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img src={MailSent} alt="Mail Sent" />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default NewNotificationModalSucces;
