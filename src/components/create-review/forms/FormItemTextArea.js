import React from 'react';
import styles from '../CreateReview.module.css';

/**
 * @name FormItem
 * @description Input field
 * @return component
 */
const FormItemTextArea = ({
  onChange, value, id, label, placeholder, type, className, reviewLength
}) => {
  let error;
  let count = 0;
  if (reviewLength > 0) {
    count = reviewLength;
  }
  if (reviewLength > 300) {
    error = 'Must be 300 characters or less';
  }

  return (
    <div className={className}>
      <label className={styles.label} htmlFor={id}>
        {label}
        <div>
          <textarea
            className={styles.inputTextArea}
            id={id}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            value={value}
          />
          {/* {error && (
            <textarea
              className={styles.inputTextArea}
              id={id}
              onChange={onChange}
              placeholder={placeholder}
              type={type}
              value={value}
            />
          )} */}
          {!error && (
            <p className={styles.paragraph}>
              {`${300 - count} characters remaining`}
            </p>
          )}
          {error && (
            <p className={styles.error_item}>
              {`${error}: count ${count}`}
            </p>
          )}
        </div>
      </label>
    </div>
  );
};

export default FormItemTextArea;
