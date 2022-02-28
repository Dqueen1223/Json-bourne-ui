import React from 'react';
import { styles } from './DeliveryAddress.module.css';

const PromoItem = ({
  onChange, value, id, label, placeholder, type, error, success
}) => (
  <div>
    <label className={styles.label} htmlFor={id}>
      {label}
      <div>
        <input
          className={error ? styles.inputError : styles.input}
          id={id}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          value={value}
        />
        )
        {success && !error && (
          <input
            className={styles.success}
            id={id}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            value={value}
          />
        )}
        {!error && (<p className={styles.paragraph} />)}
        {error && (
        <p className={styles.error_item}>
          {error}
        </p>
        )}
      </div>
    </label>
  </div>
);

export default PromoItem;
