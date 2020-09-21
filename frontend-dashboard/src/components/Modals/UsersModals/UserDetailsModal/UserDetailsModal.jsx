import React, { useState } from 'react';
import './UserDetailsModal.css';
import Modal from 'react-bootstrap/Modal';


function UsersDetailsModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  console.log('props are:', props);
  return (
    <>
      <div onClick={handleShow}>Display details</div>

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
            <div className="modal-title">About User</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex container-fluid">
            <div className="col-lg">
              <div className="d-flex">
                <div className="col modal-body-title">Name</div>
                <div className="col modal-body-title">Phone Number</div>
              </div>
              <div className="d-flex">
  <div className="col modal-body-subtitle">{props.details.name}</div>
                <div className="col modal-body-subtitle">{props.details.phone}</div>
              </div>
              <div className="d-flex">
                <div className="col modal-body-title">e-mail</div>
                <div className="col modal-body-title">Admin</div>
              </div>
              <div className="d-flex">
                <div className="col modal-body-subtitle">{props.details.email}</div>
                <div className="col modal-body-subtitle">{props.details.user_admin ? 'true' : 'false'}</div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
        <div variant="primary" className="profile-button-cancel" onClick={handleClose}>
            Cancel
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UsersDetailsModal;
