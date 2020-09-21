import React, { useState } from 'react';
import './ProfileModal.css';
import Modal from 'react-bootstrap/Modal';
import ProfileEditModal from '../ProfileEditModal/ProfileEditModal';
import PasswordChangeModal from '../PasswordChangeModal/PasswordChangeModal';


function ProfileModal(props) {
  const [show, setShow] = useState(false);


  const handleClose = () => { 
    setShow(false);}

  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow}>Profile</div>

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
          <Modal.Title>My Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex">
            <div className="col modal-body-title">Name</div>
          </div>
          <div className="d-flex">
            <div className="col modal-body-subtitle">{props.details.name}</div>
          </div>
          <div className="d-flex">
            <div className="col modal-body-title ">E-Mail</div>
            <div className="col modal-body-title ">Phone Number</div>
          </div>
          <div className="d-flex">
            <div className="col modal-body-subtitle ">{props.details.email}</div>
            <div className="col modal-body-subtitle ">{props.details.phone}</div>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-start">
          <div variant="primary" className="profile-button">
            <ProfileEditModal details={props.details}/>
          </div>
          <div variant="primary" className="profile-password-button">
            <PasswordChangeModal details={props.details}/>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProfileModal;
