import React from 'react';
import FormItem from '../form/FormItem';
import FormItemDropdown from '../form/FormItemDropdown';
import FormItemDateTime from '../form/FormItemDateTime';
import styles from './PromoForm.module.css';

const PromoForm = () => {
  const typeOptions = ['%', '$'];
  return (
    <>
      <div className={styles.createPromo}>
        <FormItem
          id="name"
        />
        <FormItemDropdown
          id="type"
          options={typeOptions}
        />
        <FormItem
          id="value"
        />
        <FormItemDateTime
          id="dateStart"
        />
        <FormItemDateTime
          id="dateEnd"
        />
      </div>
    </>
  );
};

export default PromoForm;
