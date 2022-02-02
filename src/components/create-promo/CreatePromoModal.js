import React from 'react';
import PromoForm from './CreatePromoForm';

// import { useCart } from '../checkout-page/CartContext';
/**
 * @name ProductCardModal
 * @description material-ui styling for product card modal
 * @return component
 */
const CreatePromo = ({ closeModal }) => {
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
      <div className="productCardModal">
        <div className="productCardModal-content">
          <div className="productCardModal-header">
            <button
              type="button"
              className="closeButton"
              onClick={closeTheModal}
            >
              &times;
            </button>
          </div>
          <div className="productCardModal-body">
            <PromoForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePromo;
