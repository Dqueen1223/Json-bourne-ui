import React from 'react';
import DateTimePicker from 'react-datetime-picker';
import styles from './FormItem.module.css';

/**
 * @name FormItem
 * @description Input field
 * @return component
 */
const FormItemDateTime = ({
  onChange, value, id, label, placeholder, type
}) => (
  <div>
    <label className={styles.label} htmlFor={id}>
      {label}
      <DateTimePicker
        minDate={new Date()}
        calendarClassName={styles.calendar}
        className={styles.calendar}
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
