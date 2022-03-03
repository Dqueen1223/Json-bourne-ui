import React from 'react';
import styles from './FormItem.module.css';
import decideClassName from './PromoFormHelper';

const PromoItem = ({
  onChange, onBlur, value, id, label, placeholder, type, error, success
}) => (
  <div>
    <label className={styles.label} htmlFor={id}>
      {label}
      <div>
        <input
          className={decideClassName(error, success)}
          id={id}
          onBlur={onBlur}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          value={value}
        />
        )
        {!error && <p className={styles.paragraph} />}
        {error
        && (
        <p className={styles.error_item}>
          {error}
        </p>
        )}
      </div>
    </label>
  </div>
);

export default PromoItem;
