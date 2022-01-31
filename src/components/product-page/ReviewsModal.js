import React, { useState } from 'react';
import './ProductCardModal.css';
import { Modal, Button } from 'react-bootstrap';

/**
 * @name ProductCardReviewModal
 * @description material-ui styling for product card review modal
 * @return component
 */

const ProductCardReviewsModal = () => {
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: '100vh' }}
      >
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Review title</Modal.Title>
        </Modal.Header>
        <Modal.Body>This should be the reviews area</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductCardReviewsModal;
