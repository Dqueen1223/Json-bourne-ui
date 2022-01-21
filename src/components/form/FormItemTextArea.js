import React from 'react';
import styles from './FormItem.module.css';

/**
 * @name FormItem
 * @description Input field
 * @return component
 */
const FormItemTextArea = ({
  onChange, value, id, label, placeholder, type
}) => (

  <div>
    <label className={styles.label} htmlFor={id}>
      {label}
      <div>
        <textarea
          className={styles.input}
          id={id}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          value={value}
        />
      </div>
    </label>
  </div>
);

export default FormItemTextArea;
