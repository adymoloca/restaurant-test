import React, { useState } from 'react';
import './AddProductModal.css';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios';
import data from '../../../../data/constants';
import { ConsoleSqlOutlined } from '@ant-design/icons';


function AddProductModal(props) {
  const [show, setShow] = useState(false);
  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_images, setProductImages] = useState("");
  const [product_price, setProductPrice] = useState("");
  const [product_category, setProductCategory] = useState("");
  const [product_extra, setProductExtra] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [categoryFromStorage, setCategoryFromStorage] = useState(JSON.parse(localStorage.getItem('categoryDetailsStorage')));

  // function encodeImageFileAsURL(element) {
  //   var file = element.files[0];
  //   var reader = new FileReader();
  //   reader.onloadend = function() {
  //     console.log('RESULT', reader.result)
  //   }
  //   reader.readAsDataURL(file);
  // }

  

  const populateCategories = () => {
    let items = [];
    for (let item of categoryFromStorage) {
        console.log('item name',item.category_name);
      items.push( <option>{item.category_name}</option>)
    }
    return items;
  }
  const handleSubmit = (e) => {
    e.preventDefault();


    Axios.post(data.baseUrl + "api/admin/products/addProduct", {
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
        alert("Product could not be added");
      });
    }

  return (
    <>
      <div onClick={handleShow}>Add new product </div>

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
              <div className="modal-title">Add a new product</div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="col modal-body-title">Name</div>
            <input type="text" className="admin-input"  placeHolder='product name..' onChange={e => setProductName(e.target.value)}/>
            <div className="col modal-body-title">Category</div>
            {/* <input type="drop-down" className="admin-input" onChange={e => setProductCategory(e.target.value)}/> */}
            <select placeholder='select' onChange={e => setProductCategory(e.target.value)} onClick={populateCategories}>
            <option>{categoryFromStorage[0].category_name}</option>
            <option>{categoryFromStorage[1].category_name}</option>
            <option>{categoryFromStorage[2].category_name}</option>
            <option>{categoryFromStorage[3].category_name}</option>
            <option>{categoryFromStorage[4].category_name}</option>
            </select>
            <div className="col modal-body-title">Price</div>
            <input type="text" className="admin-input"  onChange={e => setProductPrice(e.target.value)}/>
            <div className="col modal-body-title">Extra</div>
            <input type="text" className="admin-input"  onChange={e => setProductExtra(e.target.value)}/>
            <div className="col modal-body-title">Image</div>
            <input type="text" className="admin-input" onChange={e => setProductImages(e.target.value)}/>
            <div className="col modal-body-title">Description</div>
            <input type="text" className="admin-input"  onChange={e => setProductDescription(e.target.value)}/>
            {/* <input type="file" onChange={(e) => encodeImageFileAsURL(e)}/> */}
          </div>
        </Modal.Body>
        <Modal.Footer className=" d-flex justify-content-start">
          <div className=" d-flex justify-content-start">
            <div variant="primary" className="profile-button" onClick={handleSubmit}>
              Add product
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProductModal;
