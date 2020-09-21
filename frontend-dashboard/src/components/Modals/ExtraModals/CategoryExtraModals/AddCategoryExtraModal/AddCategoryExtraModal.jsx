import React, { useState } from 'react';
import './AddCategoryExtraModal.css';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios';
import data from '../../../../../data/constants';


function AddCategoryExtraModal(props) {
  const [show, setShow] = useState(false);
  const [extra_category_name, setExtraCategoryName] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  const handleSubmit = (e) => {
    e.preventDefault();


    Axios.post(data.baseUrl + "api/admin/extraCategories/addExtraCategory", {
        extra_category_name
        
    })
      .then((res) => {
        handleClose();
        setTimeout(()=>{
          window.location.reload();
        }, 200);
    
      })
      .catch((err) => {
        alert("Extra category could not be added");
      });
    }

  return (
    <>
      <div onClick={handleShow}>Add new extra category </div>

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
              <div className="modal-title">Add a new extra category</div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="col modal-body-title">Category name</div>
            <input type="text" className="admin-input"  onChange={e => setExtraCategoryName(e.target.value)}/>
          </div>
        </Modal.Body>
        <Modal.Footer className=" d-flex justify-content-start">
          <div className=" d-flex justify-content-start">
            <div variant="primary" className="profile-button" onClick={handleSubmit}>
              Add category extra
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCategoryExtraModal;
