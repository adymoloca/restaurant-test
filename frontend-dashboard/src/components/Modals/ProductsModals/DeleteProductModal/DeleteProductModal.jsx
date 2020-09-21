import React, { useState } from 'react';
import './DeleteProductModal.css';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios';
import data from '../../../../data/constants';
import {BinIcon, GreyBinIcon} from '../../../../utils/iconsFactory'

const ProductDeleteModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(typeof(props.remove));
  const _id=props.details._id;

  const Remove = (e) => {
    Axios.delete(data.baseUrl + "api/admin/products/"+ _id )
      .then((res) => {
        alert("Product was removed successfully !");
        handleClose();
        window.location.reload();
      })
      .catch((err) => {
        alert("Product could not be deleted");
      });
    }

  return (
    <>
      <div onClick={handleShow} ><GreyBinIcon/></div>

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
            <BinIcon/>
              <div className="modal-title text-center">
                Are you sure you want to delete the product {props.details.product_name} ?
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer className="justify-content-center">
        <div variant="primary" className="profile-button" onClick={Remove}>
            Delete
          </div>
          <div variant="primary" className="profile-button-cancel" onClick={handleClose}>
            Cancel
          </div>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProductDeleteModal;
