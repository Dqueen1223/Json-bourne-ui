import React from 'react';
import FormItem from './forms/FormItem';
import FormItemDropdown from './forms/FormItemDropdown';
import FormItemDateTime from './forms/FormItemDateTime';
import styles from './PromoForm.module.css';

const PromoForm = ({
  endChange, startChange, startDate, endDate, onClick, onChange, promo
}) => {
  const typeOptions = ['%', '$'];
  return (
    <>
      <div className={styles.createPromo}>
        <FormItem
          id="name"
          label="Promo Code"
          className={styles.nameInput}
          onChange={onChange}
        />
        <div className={styles.discount}>
          <FormItemDropdown
            id="type"
            label="Type"
            options={typeOptions}
            className={styles.typeDropdown}
            onChange={onChange}
          />
          <FormItem
            id="value"
            label="Amount"
            className={styles.valueInput}
            onChange={onChange}
            value={promo.value}
          />
        </div>
        <div className={styles.promoDates}>
          <FormItemDateTime
            id="dateStart"
            label="Start Date"
            className={styles.dateInput}
            onChange={startChange}
            onClick={onChange}
            value={startDate}
          />
          <FormItemDateTime
            id="dateEnd"
            label="End Date"
            className={styles.dateInput}
            onChange={endChange}
            onClick={onChange}
            value={endDate}
          />
        </div>
        <button
          type="button"
          className={styles.buttons}
          onClick={onClick}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default PromoForm;
