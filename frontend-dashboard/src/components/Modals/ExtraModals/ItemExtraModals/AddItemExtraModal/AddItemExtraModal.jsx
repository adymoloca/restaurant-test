import React, { useState } from 'react';
import './AddItemExtraModal.css';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios';
import data from '../../../../../data/constants';


function AddItemExtraModal(props) {
  const [show, setShow] = useState(false);
  const [extra_category, setExtraCategory] = useState("");
  const [extra_name, setExtraName] = useState("");
  const [extra_price, setExtraPrice] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleSubmit = (e) => {
    e.preventDefault();


    Axios.post(data.baseUrl + "api/admin/extras/addExtra", {
        extra_category,
        extra_name,
        extra_price
    })
      .then((res) => {
        handleClose();
        setTimeout(()=>{
          window.location.reload();
        }, 200);
    
      })
      .catch((err) => {
        alert("Extra item could not be added");
      });
    }

  return (
    <>
      <div onClick={handleShow}>Add new item extra </div>

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
              <div className="modal-title">Add a new item extra</div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="col modal-body-title">Extra category</div>
            <input type="text" className="admin-input"  onChange={e => setExtraCategory(e.target.value)}/>
            <div className="col modal-body-title">Name</div>
            <input type="text" className="admin-input" onChange={e => setExtraName(e.target.value)}/>

            <div className="col modal-body-title">Price</div>
            <input type="text" className="admin-input"  onChange={e => setExtraPrice(e.target.value)}/>
            {/* <input type="file" onChange={(e) => encodeImageFileAsURL(e)}/> */}
          </div>
        </Modal.Body>
        <Modal.Footer className=" d-flex justify-content-start">
          <div className=" d-flex justify-content-start">
            <div variant="primary" className="profile-button" onClick={handleSubmit}>
              Add item extra
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddItemExtraModal;
