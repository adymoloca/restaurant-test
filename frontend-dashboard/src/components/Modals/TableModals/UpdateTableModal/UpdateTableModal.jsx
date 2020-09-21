import React, { useState } from 'react';
import './UpdateTableModal.css';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios';
import data from '../../../../data/constants';
import {EditIcon} from '../../../../utils/iconsFactory';

function UpdateTableModal(props) {
  const [show, setShow] = useState(false);
  const [table_number, setTableNumber] = useState("");
  const [table_seats, setTableSeats] = useState("");
  const [table_indoor, setTableIndoor] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const _id=props.details._id;

  const UpdateTable = (e) => {
    e.preventDefault();
    console.log('id is', _id);


    Axios.patch(data.baseUrl + "api/admin/tables/" + _id, {
        table_number,
        table_seats,
        table_indoor
    })
      .then((res) => {
        handleClose();
        setTimeout(()=>{
          window.location.reload();
        }, 200);
    
      })
      .catch((err) => {
        alert("Table could not be updated");
      });
    }

  return (
    <>
      <div onClick={handleShow} ><EditIcon/></div>

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
              <div className="modal-title">Update table</div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="col modal-body-title">Number of table</div>
            <input type="text" className="admin-input"  onChange={e => setTableNumber(e.target.value)}/>
            <div className="col modal-body-title">Available places</div>
            <input type="text" className="admin-input" onChange={e => setTableSeats(e.target.value)}/>

            <div className="col modal-body-title">Location</div>
            <select placeholder='select' onChange={e => setTableIndoor(e.target.value)}>
            <option>INDOOR</option>
            <option>OUTDOOR</option>
            </select>
          </div>
        </Modal.Body>
        <Modal.Footer className=" d-flex justify-content-start">
          <div className=" d-flex justify-content-start">
            <div variant="primary" className="profile-button" onClick={UpdateTable}>
              Update
            </div>
            <div variant="primary" className="profile-button-cancel" onClick={handleClose}>
            Cancel
          </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateTableModal;
