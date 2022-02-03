import React from 'react';
import PromoForm from './CreatePromoForm';

// import { useCart } from '../checkout-page/CartContext';
/**
 * @name CreatePromoModal
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
          <div className="PromoModal-header">
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
