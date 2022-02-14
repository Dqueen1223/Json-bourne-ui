import React from 'react';
import styles from '../ProfilePage.css';

const ProfileItem = ({
  onChange, value, id, label, placeholder, type, error, editing
}) => (
  <li>
    {label}
    :
    {!editing && (
      { value }
    )}
    {editing && (
      <input
        className={error ? styles.inputError : styles.input}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    )}
    {error ? <p className={styles.paragraph} /> : (
      <p className={styles.error_item}>
        {error}
      </p>
    )}
  </li>
);

export default ProfileItem;
