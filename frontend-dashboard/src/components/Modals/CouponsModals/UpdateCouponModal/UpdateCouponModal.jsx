import React, { useState } from 'react';
import './UpdateCouponModal.css';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios';
import data from '../../../../data/constants';
import {EditIcon} from '../../../../utils/iconsFactory';

function UpdateCouponModal(props) {
  const [show, setShow] = useState(false);
  const [coupon_name, setCouponName] = useState("");
  const [coupon_value, setCouponValue] = useState("");
  const [coupon_minOrder, setCouponMinOrder] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const _id=props.details._id;

  const UpdateCoupon = (e) => {
    e.preventDefault();
    console.log('id is', _id);


    Axios.patch(data.baseUrl + "api/admin/coupons/" + _id, {
        coupon_name: coupon_name,
        coupon_value: coupon_value,
        coupon_minOrder: coupon_minOrder
    })
      .then((res) => {
        handleClose();
        setTimeout(()=>{
          window.location.reload();
        }, 200);
    
      })
      .catch((err) => {
        alert("Coupon could not be updated");
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
              <div className="modal-title">Update coupon</div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="col modal-body-title">Coupon name</div>
            <input type="text" className="admin-input"  onChange={e => setCouponName(e.target.value)}/>
            <div className="col modal-body-title">Value</div>
            <input type="text" className="admin-input" onChange={e => setCouponValue(e.target.value)}/>

            <div className="col modal-body-title">Minimum order</div>
            <input type="text" className="admin-input"  onChange={e => setCouponMinOrder(e.target.value)}/>
          </div>
        </Modal.Body>
        <Modal.Footer className=" d-flex justify-content-start">
          <div className=" d-flex justify-content-start">
            <div variant="primary" className="profile-button" onClick={UpdateCoupon}>
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

export default UpdateCouponModal;
