import React, { useState } from 'react';
import './UpdateProductModal.css';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios';
import data from '../../../../data/constants';
import {EditIcon} from '../../../../utils/iconsFactory';

function UpdateProductModal(props) {
  const [show, setShow] = useState(false);
  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_images, setProductImages] = useState("");
  const [product_price, setProductPrice] = useState("");
  const [product_category, setProductCategory] = useState("");
  const [product_extra, setProductExtra] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const _id=props.details._id;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('id is', _id);


    Axios.patch(data.baseUrl + "api/admin/products/" + _id, {
        product_name,
        product_description, 
        product_images, 
        product_price, 
        product_category,
        product_extra
    })
      .then((res) => {
        handleClose();
        setTimeout(()=>{
          window.location.reload();
        }, 200);
    
      })
      .catch((err) => {
        alert("Product could not be updated");
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
              <div className="modal-title">Update Product</div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="col modal-body-title">Product name</div>
            <input type="text" className="admin-input"  onChange={e => setProductName(e.target.value)}/>
            <div className="col modal-body-title">Description</div>
            <input type="text" className="admin-input" onChange={e => setProductDescription(e.target.value)}/>

            <div className="col modal-body-title">Image</div>
            <input type="text" className="admin-input"  onChange={e => setProductImages(e.target.value)}/>
            <div className="col modal-body-title">Price</div>
            <input type="text" className="admin-input"  onChange={e => setProductPrice(e.target.value)}/>
            <div className="col modal-body-title">Category</div>
            <input type="text" className="admin-input" onChange={e => setProductCategory(e.target.value)}/>

            <div className="col modal-body-title">Extra</div>
            <input type="text" className="admin-input"  onChange={e => setProductExtra(e.target.value)}/>
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

export default UpdateProductModal;
