import React, { useState } from 'react';
import PromoForm from './CreatePromoForm';
import styles from './PromoForm.module.css';
import makePromo from './CreatePromoService';

// import { useCart } from '../checkout-page/CartContext';
/**
 * @name CreatePromoModal
 * @description material-ui styling for product card modal
 * @return component
 */
const CreatePromo = ({ closeModal }) => {
  const [startDate, onStartChange] = useState(new Date());
  const [endDate, onEndChange] = useState(new Date());
  const [promo, setPromoData] = useState({});

  const onPromoChange = (e) => {
    if (startDate && endDate) {
      promo.StartDate = startDate.toISOString();
      promo.EndDate = endDate.toISOString();
    }
    setPromoData({ ...promo, [e.target.id]: e.target.value });
    console.log(promo);
    // setErrors({});
  };

  const handleSubmit = async () => {
    const newPromo = {
      Code: promo.name,
      Discount: promo.discount,
      Type: promo.type,
      StartDate: promo.startDate,
      EndDate: promo.endDate,
    };
    makePromo(newPromo);
    // if (Object.keys(errors).length === 0) {
    //   // if (await makePromo(product) === 'valid') {
    //   //   toast.success('');
    //   // }
    // } else {
    //   toast.error('Some fields contain invalid inputs.');
    // }
  };

  const closeTheModal = (e) => {
    if (e.target.className === styles.promoModalBackground || e.target.className === 'closeButton') {
      closeModal(false);
    }
  };

  return (
    <div
      className={styles.promoModalBackground}
      onClick={closeTheModal}
      aria-hidden="true"
    >
      <div className={styles.promoModal}>
        <div className={styles.promoModalContent}>
          <div className={styles.promoModalHeader}>
            <h2 className={styles.promoTitle}>Create Promotion</h2>
            <button
              type="button"
              className="closeButton"
              onClick={closeTheModal}
            >
              &times;
            </button>
          </div>
          <div className={styles.promoModalBody}>
            <PromoForm
              startChange={onStartChange}
              endChange={onEndChange}
              startDate={startDate}
              endDate={endDate}
              onChange={onPromoChange}
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePromo;
