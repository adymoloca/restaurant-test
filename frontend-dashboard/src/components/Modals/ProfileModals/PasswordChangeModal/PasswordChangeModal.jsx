import React, { useState } from 'react';
import './PasswordChangeModal.css';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios';
import data from '../../../../data/constants';

function PasswordChangeModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirm_newPassword, setConfirmNewPassword] = useState("");
  const _id=props.details._id;

  const updatePassword = () => {
    Axios.patch(data.baseUrl + "api/admin/users/editPass/" + _id, {
      currentPassword: currentPassword,
      newPassword: newPassword,
      confirm_newPassword: confirm_newPassword
        
    })
      .then((res) => {
        console.log('data', res.data);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        handleClose();
        setTimeout(()=>{
          window.location.reload();
        }, 10);
    
      })
      .catch((err) => {
        alert("password could not be updated");
      });
    }

  return (
    <>
      <div onClick={handleShow}>Change Password</div>

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
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="modal-body-title">Current password</div>
            <input type="password" className="input-profile" onChange={e => setCurrentPassword(e.target.value)}/>
            <div className="modal-body-title">New password</div>
            <input type="password" className="input-profile" onChange={e => setNewPassword(e.target.value)}/>
            <div className="modal-body-title">Confirm New password</div>
            <input type="password" className="input-profile" onChange={e => setConfirmNewPassword(e.target.value)}/>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-start">
          <div
            variant="primary"
            className="profile-button"
            onClick={updatePassword}
          >
            Update
          </div>
          <div
            variant="primary"
            className="profile-password-button"
            onClick={handleClose}
          >
            Cancel
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PasswordChangeModal;
