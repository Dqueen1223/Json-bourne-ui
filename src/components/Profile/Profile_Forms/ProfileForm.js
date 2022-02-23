import React from 'react';
import styles from '../ProfilePage.css';

const ProfileItem = ({
  onChange, value, id, label, placeholder, type, error, editing
}) => (
  <ul>
    <li>
      {label}
      :
      {!editing && (
        { value }
      )}
      {!error && editing && (
        <input
          className={styles.input}
          id={id}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          value={value}
        />
      )}
      {error && editing && (
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
