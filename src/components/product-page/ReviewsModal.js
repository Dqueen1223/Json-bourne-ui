import React, { useState } from 'react';
import './ProductCardModal.css';
// import { Modal, Button } from 'react-bootstrap';
// import { render } from '@testing-library/react';

/**
 * @name ProductCardReviewModal
 * @description material-ui styling for product card review modal
 * @return component
 */

const ProductCardReviewsModal = ({ product, closeModal }) => {
  const [setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onAdd = () => {
    dispatch(
      {
        type: 'add',
        product: {
          id: product.id,
          name: product.name,
          description: product.description
        }
      }
    );
  };
  const closeTheModal = (e) => {
    if (e.target.className === 'productCardModalBackground' || e.target.className === 'closeButton') {
      closeModal(false);
    }
  };
  return (
    <div
      className="productCardModalBackground"
      onClick={closeTheModal}
      aria-hidden="true"
    >
      <div className="reviewModal">
        <div className="reviewModal-content">
          <div className="reviewModal-header">
            <button
              type="button"
              className="closeButton"
              onClick={closeTheModal}
            >
              &times;
            </button>
          </div>
          <div className="reviewModal-body">
            <div className="row">
              <div className="reviewModal-title">{product.name}</div>
            </div>
            <div className="row">
              <div className="productReview">{product.description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCardReviewsModal;
