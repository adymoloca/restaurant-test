import React, { useState } from 'react';
import './NewNotificationModal.css';
import Modal from 'react-bootstrap/Modal';
import NewNotificationModalSucces from '../NewNotificationModalSucces/NewNotificationModalSucces';
import DatePicker from '../../../Others/DatePicker/DatePicker';

function NewNotificationModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow}>Send Notification</div>

      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        className="modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="modal-title">New message</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="d-flex">
              <div className="col modal-body-title">Title</div>
              <div className="col modal-body-title">
                Users who have  ever ordered :
              </div>
            </div>
            <div className="d-flex">
              <div className="col modal-body-subtitle">
                <input type="text" className="principal-input" />
              </div>
              <div className="col modal-body-subtitle">
                <select className="select-category" placeholder="Selecteer">
                  <option value="grapefruit" className="option-category">
                    Pizzeria
                  </option>
                  <option value="lime" className="option-category">
                    Fast-Food
                  </option>
                  <option selected value="coconut" className="option-category">
                    Restaurant
                  </option>
                </select>
              </div>
            </div>
            <div className="d-flex">
              <div className="col modal-body-title">Message</div>
              <div className="col modal-body-title">
                <div className="col">
                  <div className="choice-text mb-3">Send now</div>
                  <div className="choice-text">Plan for later</div>
                </div>
              </div>
            </div>
            <div className="d-flex">
              <div className="col modal-body-subtitle">
                <input type="text" className="principal-input" />
              </div>
              <div className="col modal-body-subtitle">
                {/* <DatePicker/> */}
              </div>
            </div>
            <div className="d-flex">
              <div className="col modal-body-title">
                <div className="col">
                  <div className="choice-text mb-3">Send to everyone</div>
                  <div className="choice-text">Send location targeted</div>
                </div>
              </div>
            </div>
            <div className="col location-text-title">
              Users near
            </div>
            <div className="col modal-body-title">
              <input type="text" className="principal-input" />
              <input type="text" className="secondary-input ml-3" />
              <div className="location-text mb-3">KM around</div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-start">
          <div variant="primary" className="profile-button-delete" onClick={handleClose}>
            Cancel
          </div>
          <div variant="primary" className="profile-button">
            <NewNotificationModalSucces />
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewNotificationModal;
