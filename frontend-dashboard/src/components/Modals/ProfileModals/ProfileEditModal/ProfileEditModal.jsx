import React, { useState } from 'react';
import './ProfileEditModal.css';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios';
import data from '../../../../data/constants';



function ProfileEditModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const _id=props.details._id;
  

  const updateProfile = () => {
    


    Axios.patch(data.baseUrl + "api/admin/users/" + _id, {
        name: name,
        phone:phone
    })
      .then((res) => {
        console.log('data', res.data);
        console.log('location', window.location);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        // localStorage.setItem('userDetailsStorage', JSON.stringify(res.data.users));
        handleClose();
        setTimeout(()=>{
          window.location.reload();
        }, 10);
        })
      .catch((err) => {
        alert("User could not be updated");
      });
    }

  return (
    <>
      <div onClick={handleShow}>Change Profile</div>

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
          <Modal.Title>My profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid d-flex">
            <div className="col">
              <div className="modal-body-title">Name</div>
              <input type="text" className="input-profile" onChange={e => setName(e.target.value)}/>
              <div className="modal-body-title">Phone number</div>
              <input type="text" className="input-profile" onChange={e => setPhone(e.target.value)} />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-start">
          <div
            variant="primary"
            className="profile-button"
            onClick={updateProfile}
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

export default ProfileEditModal;
