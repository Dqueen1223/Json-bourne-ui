import React from 'react';
import DateTimePicker from 'react-datetime-picker';
import styles from '../PromoForm.module.css';

/**
 * @name FormItem
 * @description Input field
 * @return component
 */
const FormItemDateTime = ({
  onChange, value, id, label, placeholder, type, className
}) => (
  <div className={className}>
    <label className={styles.promoLabel} htmlFor={id}>
      {label}
      <DateTimePicker
        minDate={new Date()}
        calendarClassName={styles.calendar}
        className={styles.calendar}
        disableClock
        clearIcon={null}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </label>
  </div>
);

export default FormItemDateTime;
