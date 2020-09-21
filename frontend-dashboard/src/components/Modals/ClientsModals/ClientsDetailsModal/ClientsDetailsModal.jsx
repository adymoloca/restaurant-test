import React, { useState } from 'react';
import './ClientsDetailsModal.css';
import Modal from 'react-bootstrap/Modal';
import ProfileLogo from '../../../../assets/ProfileLogo.png';
import NewNotificationModalSucces from '../../NotificationsModals/NewNotificationModalSucces/NewNotificationModalSucces';

function ClientsDetailsModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  console.log('props are:', props);
  return (
    <>
      <div onClick={handleShow}>Display details</div>

      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        className="modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="modal-title">Client details</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex container-fluid">
            <div className="col-lg">
              <div className="d-flex">
                <div className="col modal-body-title">Client Name</div>
                <div className="col modal-body-title">Number of orders</div>
              </div>
              <div className="d-flex">
  <div className="col modal-body-subtitle">{props.details.client_name}</div>
                <div className="col modal-body-subtitle">{props.details.client_numberOfOrders}</div>
              </div>
              <div className="d-flex">
                <div className="col modal-body-title">E-mail</div>
                <div className="col modal-body-title">Phone number</div>
              </div>
              <div className="d-flex">
                <div className="col modal-body-subtitle">{props.details.client_email}</div>
                <div className="col modal-body-subtitle">{props.details.client_phone}</div>
              </div>
              <div className="d-flex">
                <div className="col modal-body-title">Adress</div>
                <div className="col modal-body-title">Client since</div>
              </div>
              <div className="d-flex">
                <div className="col modal-body-subtitle">{props.details.client_adress}</div>
                <div className="col modal-body-subtitle">{props.details.client_date_added}</div>
              </div>
              
            </div>

            <div className="col-lg">
              <div className="col logo-text ml-5">Profile picture</div>
              <div className="col text-right mb-5">
                <img src={ProfileLogo} alt="" />
              </div>
              <div className="col ml-5 mb-3">Push message</div>
              <div className="col text-center">
                {' '}
                <input
                  className="input-user-details"
                  type="text"
                  placeholder="Title"
                />
              </div>
              <div className="col text-center">
                {' '}
                <input
                  type="text"
                  placeholder="Message"
                  className="input-user-details"
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div variant="primary" className="profile-button">
            <NewNotificationModalSucces />
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ClientsDetailsModal;
