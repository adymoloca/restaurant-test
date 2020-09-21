import React, { useState } from 'react';
import './AddCategoryModal.css';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios';
import data from '../../../../data/constants';
import { ConsoleSqlOutlined } from '@ant-design/icons';


function AddCategoryModal(props) {
  const [show, setShow] = useState(false);
  const [category_name, setCategoryName] = useState("");
  const [category_description, setCategoryDescription] = useState("");
  const [category_image, setCategoryImage] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // function encodeImageFileAsURL(element) {
  //   var file = element.files[0];
  //   var reader = new FileReader();
  //   reader.onloadend = function() {
  //     console.log('RESULT', reader.result)
  //   }
  //   reader.readAsDataURL(file);
  // }

  

  const handleSubmit = (e) => {
    e.preventDefault();


    Axios.post(data.baseUrl + "api/admin/categories/addCategory", {
        category_name,
        category_description,
        category_image
    })
      .then((res) => {
        handleClose();
        setTimeout(()=>{
          window.location.reload();
        }, 200);
    
      })
      .catch((err) => {
        alert("Category could not be added");
      });
    }

  return (
    <>
      <div onClick={handleShow}>Add new category </div>

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
              <div className="modal-title">Add a new category</div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="col modal-body-title">Category name</div>
            <input type="text" className="admin-input"  onChange={e => setCategoryName(e.target.value)}/>
            <div className="col modal-body-title">Description</div>
            <input type="text" className="admin-input" onChange={e => setCategoryDescription(e.target.value)}/>

            <div className="col modal-body-title">Image</div>
            <input type="text" className="admin-input"  onChange={e => setCategoryImage(e.target.value)}/>
            {/* <input type="file" onChange={(e) => encodeImageFileAsURL(e)}/> */}
          </div>
        </Modal.Body>
        <Modal.Footer className=" d-flex justify-content-start">
          <div className=" d-flex justify-content-start">
            <div variant="primary" className="profile-button" onClick={handleSubmit}>
              Add category
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCategoryModal;
