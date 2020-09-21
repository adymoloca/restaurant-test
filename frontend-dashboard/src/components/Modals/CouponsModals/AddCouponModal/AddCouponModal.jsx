import React, { useState } from 'react';
import './AddCouponModal.css';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios';
import data from '../../../../data/constants';
import { ConsoleSqlOutlined } from '@ant-design/icons';


function AddCouponModal(props) {
  const [show, setShow] = useState(false);
  const [coupon_name, setCouponName] = useState("");
  const [coupon_value, setCouponValue] = useState("");
  const [coupon_minOrder, setCouponMinOrder] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addCoupon = (e) => {
    e.preventDefault();


    Axios.post(data.baseUrl + "api/admin/coupons/addCoupon", {
        coupon_name,
        coupon_value,
        coupon_minOrder
    })
      .then((res) => {
        handleClose();
        setTimeout(()=>{
          window.location.reload();
        }, 200);
    
      })
      .catch((err) => {
        alert("Coupon could not be added");
      });
    }

  return (
    <>
      <div onClick={handleShow}>Add new coupon </div>

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
              <div className="modal-title">Add a new coupon</div>
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
            <div variant="primary" className="profile-button" onClick={addCoupon}>
              Add coupon
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCouponModal;
