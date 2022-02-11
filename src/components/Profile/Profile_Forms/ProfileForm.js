import React from 'react';
import styles from '../ProfilePage.css';

const ProfileItem = ({
  onChange, value, id, label, placeholder, type, error
}) => (
  <ul>
    <li>
      {label}
      :
      {!error && (
        <input
          className={styles.input}
          id={id}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          value={value}
        />
      )}
      {error && (
      <input
        className={styles.inputError}
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
    </li>
  </ul>
);

export default ProfileItem;
