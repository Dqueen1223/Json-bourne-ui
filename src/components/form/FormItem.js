import React from 'react';
import styles from './FormItem.module.css';
import validateForm from './FormValidate';


/**
 * @name FormItem
 * @description Input field
 * @return component
 */
const FormItem = ({
  onChange, value, id, label, placeholder, type
}) => (

  <div>
    <label className={styles.label} htmlFor={id}>
      {label}
      <div>
        <input
          className={styles.input}
          id={id}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          value={value}
        />
        errors.{id} && <p>{errors.id}</p>
      </div>
    </label>
  </div>
);

export default FormItem;
