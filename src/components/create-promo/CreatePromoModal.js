import React, { useState } from 'react';
import { toast } from 'react-toastify';
import PromoForm from './CreatePromoForm';
import styles from './PromoForm.module.css';
import generateErrors from './forms/FormValidation';
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
  const [errors, setErrors] = useState({});

  const onPromoChange = (e) => {
    promo.startDate = startDate.toISOString();
    promo.endDate = endDate.toISOString();

    if (promo.type === undefined) {
      promo.type = '%';
    }
    setPromoData({ ...promo, [e.target.id]: e.target.value });
    setErrors({});
  };

  const handleErrors = (form) => {
    const idList = Object.keys(form);
    const errorLists = generateErrors(form, idList);

    for (let i = 0; i < idList.length; i += 1) {
      const id = idList[i];
      if (errorLists[id]) {
        errors[id] = errorLists[id];
      }
    }
    setErrors(errors);
  };

  const handleCreate = () => {
    const newPromo = {
      code: promo.code,
      discount: promo.discount,
      type: promo.type,
      startDate: promo.startDate,
      endDate: promo.endDate
    };

    handleErrors(newPromo);
    setPromoData(newPromo);
  };

  const handleSubmit = async () => {
    handleCreate();
    if (Object.keys(errors).length === 0) {
      console.log(await makePromo(promo));
      makePromo(promo);
      // if (await makePromo(newPromo) === 'valid') {
      //   toast.success('');
      // }
    } else {
      toast.error('Some fields contain invalid inputs.');
    }
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
              promo={promo}
              errors={errors}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePromo;
