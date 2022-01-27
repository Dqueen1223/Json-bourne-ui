import React, { useState } from 'react';
import styles from './filterMenu.module.css';
/**
 * @name FilterMenu
 * @description Displays Sidebar filter menu
 * @return component
 */
const FilterMenu = ({ setFilter, isActive }) => {
  const [menIsChecked, setMenIsChecked] = useState(false);
  const [womenIsChecked, setWomenIsChecked] = useState(false);
  const [kidsIsChecked, setKidsIsChecked] = useState(false);

  const checkboxReset = () => {
    setMenIsChecked(false);
    setWomenIsChecked(false);
    setKidsIsChecked(false);
  };

  const handleMensCheckbox = () => {
    checkboxReset();
    if (!menIsChecked) {
      setFilter('&demographic=Men');
    } else {
      setFilter('');
    }
    setMenIsChecked(!menIsChecked);
  };

  const handleWomensCheckbox = () => {
    checkboxReset();
    if (!womenIsChecked) {
      setFilter('&demographic=Women');
    } else {
      setFilter('');
    }
    setWomenIsChecked(!womenIsChecked);
  };

  const handleKidsCheckbox = () => {
    checkboxReset();
    if (!kidsIsChecked) {
      setFilter('&demographic=Kids');
    } else {
      setFilter('');
    }
    setKidsIsChecked(!kidsIsChecked);
  };

  return (
    <div className={isActive ? styles.sidebar : styles.sideCollapsed}>
      <div className={styles.filterCheckbox}>
        <span className={styles.checkBoxLabel}>Products</span>
        <div className={styles.fieldset}>
          <label htmlFor="mens">
            <input
              id="mens"
              type="checkbox"
              checked={menIsChecked}
              onChange={handleMensCheckbox}
            />
            Mens
          </label>
          <br />
          <label htmlFor="womens">
            <input
              id="womens"
              type="checkbox"
              checked={womenIsChecked}
              onChange={handleWomensCheckbox}
            />
            Womens
          </label>
          <br />
          <label htmlFor="kids">
            <input
              id="kids"
              type="checkbox"
              checked={kidsIsChecked}
              onChange={handleKidsCheckbox}
            />
            Kids
          </label>
          <br />
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;
