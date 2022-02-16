import React from 'react';
import styles from '../ProfilePage.css';

const ProfileForm = ({
  onChange, value, id, label, placeholder, type, error, editing
}) => {
  let tValue = value;
  if (tValue === null || tValue === undefined) {
    tValue = '';
  }
  return (
    <div>
      <li>
        {label}
        :
        {!editing && (
          tValue
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
        {error
          ? (
            <p className={styles.error_item}>
              {error}
            </p>
          )
          : (<p className={styles.paragraph} />)}
      </li>
    </div>
  );
};

export default ProfileForm;
