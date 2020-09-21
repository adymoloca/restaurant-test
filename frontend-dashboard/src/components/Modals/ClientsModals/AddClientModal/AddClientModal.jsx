import React, { useState } from 'react';
import './AddClientModal.css';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios';
import data from '../../../../data/constants';


function AddClientModal(props) {
  const [show, setShow] = useState(false);
  const [client_name, setClientName] = useState("");
  const [client_email, setEmail] = useState("");
  const [client_adress, setAdress] = useState("");
  const [client_phone, setPhone] = useState("");
  const [client_password, setPassword] = useState("");
  const [client_confirm_password, setConfirmPassword] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();


    Axios.post(data.baseUrl + "api/client/signup", {
      client_name,
      client_email,
      client_adress,
      client_phone,
      client_password,
      client_confirm_password
    })
      .then((res) => {
        handleClose();
        setTimeout(()=>{
          window.location.reload();
        }, 200);
    
      })
      .catch((err) => {
        alert("Client could not be added");
      });
    }

  return (
    <>
      <div onClick={handleShow}>Add new client </div>

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
              <div className="modal-title">Add a new client</div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="col modal-body-title">Name</div>
            <input type="text" className="admin-input"  onChange={e => setClientName(e.target.value)}/>
             <div className="col modal-body-title">E-mail</div>
            <input type="text" className="admin-input"  onChange={e => setEmail(e.target.value)}/>
            <div className="col modal-body-title">Phone Number</div>
            <input type="text" className="admin-input"  onChange={e => setPhone(e.target.value)}/>
            <div className="col modal-body-title">Password</div>
            <input type="text" className="admin-input" onChange={e => setPassword(e.target.value)}/>
            <div className="col modal-body-title">Confirm assword</div>
            <input type="text" className="admin-input" onChange={e => setConfirmPassword(e.target.value)}/>

            <div className="col modal-body-title">Adress</div>
            <input type="text" className="admin-input"  onChange={e => setAdress(e.target.value)}/>
          </div>
        </Modal.Body>
        <Modal.Footer className=" d-flex justify-content-start">
          <div className=" d-flex justify-content-start">
            <div variant="primary" className="profile-button" onClick={handleSubmit}>
              Add client
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddClientModal;
