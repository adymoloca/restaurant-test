import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios';
import data from '../../../../../data/constants';
import {EditIcon} from '../../../../../utils/iconsFactory';

function UpdateItemExtraModal(props) {
  const [show, setShow] = useState(false);
  const [extra_name, setExtraName] = useState("");
  const [extra_category, setExtraCategory] = useState("");
  const [extra_price, setExtraPrice] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const _id=props.details._id;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('id is', _id);


    Axios.patch(data.baseUrl + "api/admin/extras/" + _id, {
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
        alert("Item extra could not be updated");
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
              <div className="modal-title">Update item extra</div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="col modal-body-title">Item name</div>
            <input type="text" className="admin-input"  onChange={e => setExtraName(e.target.value)}/>
            <div className="col modal-body-title">Item category</div>
            <input type="text" className="admin-input"  onChange={e => setExtraCategory(e.target.value)}/>
            <div className="col modal-body-title">Item price</div>
            <input type="text" className="admin-input"  onChange={e => setExtraPrice(e.target.value)}/>
          </div>
        </Modal.Body>
        <Modal.Footer className=" d-flex justify-content-start">
          <div className=" d-flex justify-content-start">
            <div variant="primary" className="profile-button" onClick={handleSubmit}>
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

export default UpdateItemExtraModal;
