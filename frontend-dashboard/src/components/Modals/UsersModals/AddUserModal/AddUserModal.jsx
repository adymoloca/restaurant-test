import React, { useState } from 'react';
import './AddUserModal.css';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios';
import data from '../../../../data/constants';


function AddUserModal(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [user_admin, setUserAdmin] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();


    Axios.post(data.baseUrl + "api/admin/users/addUser", {
      name,
      email,
      password,
      confirm_password,
      phone,
      user_admin
    })
      .then((res) => {
        handleClose();
        setTimeout(()=>{
          window.location.reload();
        }, 200);
    
      })
      .catch((err) => {
        alert("User could not be added");
      });
    }

  return (
    <>
      <div onClick={handleShow}>Add new user </div>

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
              <div className="modal-title">Add a new user</div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="col modal-body-title">Name</div>
            <input type="text" className="admin-input"  onChange={e => setName(e.target.value)}/>
            <div className="col modal-body-title">Email</div>
            <input type="text" className="admin-input" onChange={e => setEmail(e.target.value)}/>

            <div className="col modal-body-title">Password</div>
            <input type="text" className="admin-input"  onChange={e => setPassword(e.target.value)}/>
            <div className="col modal-body-title">Confirm password</div>

            <input type="text" className="admin-input"  onChange={e => setConfirmPassword(e.target.value)}/>
            <div className="col modal-body-title">Phone Number</div>
            <input type="text" className="admin-input"  onChange={e => setPhone(e.target.value)}/>
            <div className="col modal-body-title">Admin/ User</div>
            <input type="text" className="admin-input" onChange={e => setUserAdmin(e.target.value)}/>
          </div>
        </Modal.Body>
        <Modal.Footer className=" d-flex justify-content-start">
          <div className=" d-flex justify-content-start">
            <div variant="primary" className="profile-button" onClick={handleSubmit}>
              Add user
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddUserModal;
