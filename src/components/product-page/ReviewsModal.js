import React, { useState } from 'react';
// import './ProductCardModal.css';
import './ReviewsModal.css';
import { Modal, Button } from 'react-bootstrap';

/**
 * @name ProductCardReviewModal
 * @description material-ui styling for product card review modal
 * @return component
 */

const ProductCardReviewsModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Item name</Modal.Title>
        </Modal.Header>
        <Modal.Body>This should be the review area. Review stars above and date below</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ProductCardReviewsModal;
