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
  const [nikeIsChecked, setNikeIsChecked] = useState(false);
  const [reebokIsChecked, setReebokIsChecked] = useState(false);
  const [asicsIsChecked, setAsicsIsChecked] = useState(false);
  const [brooksIsChecked, setBrooksIsChecked] = useState(false);
  const [skechersIsChecked, setSkechersIsChecked] = useState(false);
  const [pumaIsChecked, setPumaIsChecked] = useState(false);
  const [underArmorIsChecked, setUnderArmorIsChecked] = useState(false);
  const [adidasIsChecked, setAdidasIsChecked] = useState(false);

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

  const handleNikeCheckbox = () => {
    if (!nikeIsChecked) {
      setFilter('&brand=Nike');
    } else {
      setFilter('');
    }
    setNikeIsChecked(!nikeIsChecked);
  };

  const handleReebokCheckbox = () => {
    if (!reebokIsChecked) {
      setFilter('&brand=Reebok');
    } else {
      setFilter('');
    }
    setReebokIsChecked(!reebokIsChecked);
  };

  const handleAsicsCheckbox = () => {
    if (!nikeIsChecked) {
      setFilter('&brand=Asics');
    } else {
      setFilter('');
    }
    setAsicsIsChecked(!asicsIsChecked);
  };

  const handleBrooksCheckbox = () => {
    if (!asicsIsChecked) {
      setFilter('&brand=Brooks');
    } else {
      setFilter('');
    }
    setBrooksIsChecked(!brooksIsChecked);
  };

  const handleSkechersCheckbox = () => {
    if (!skechersIsChecked) {
      setFilter('&brand=Skechers');
    } else {
      setFilter('');
    }
    setSkechersIsChecked(!skechersIsChecked);
  };

  const handlePumaCheckbox = () => {
    if (!pumaIsChecked) {
      setFilter('&brand=Puma');
    } else {
      setFilter('');
    }
    setPumaIsChecked(!pumaIsChecked);
  };

  const handleUnderArmorCheckbox = () => {
    if (!underArmorIsChecked) {
      setFilter('&brand=Under&#160;Armor');
    } else {
      setFilter('');
    }
    setUnderArmorIsChecked(!underArmorIsChecked);
  };

  const handleAdidasCheckbox = () => {
    if (!adidasIsChecked) {
      setFilter('&brand=Adidas');
    } else {
      setFilter('');
    }
    setAdidasIsChecked(!adidasIsChecked);
  };

  return (
    <div className={isActive ? styles.sidebar : styles.sideCollapsed}>
      <div className={styles.filterCheckbox}>
        <span className={styles.checkBoxLabel}>Brand</span>
        <div className={styles.fieldset}>
          <label htmlFor="nike">
            <input
              id="nike"
              type="checkbox"
              checked={nikeIsChecked}
              onChange={handleNikeCheckbox}
            />
            Nike
          </label>
          <br />
          <label htmlFor="reebok">
            <input
              id="reebok"
              type="checkbox"
              checked={reebokIsChecked}
              onChange={handleReebokCheckbox}
            />
            Reebok
          </label>
          <br />
          <label htmlFor="asics">
            <input
              id="asics"
              type="checkbox"
              checked={asicsIsChecked}
              onChange={handleAsicsCheckbox}
            />
            Asics
          </label>
          <br />
          <label htmlFor="brooks">
            <input
              id="brooks"
              type="checkbox"
              checked={brooksIsChecked}
              onChange={handleBrooksCheckbox}
            />
            Brooks
          </label>
          <br />
          <label htmlFor="skechers">
            <input
              id="skechers"
              type="checkbox"
              checked={skechersIsChecked}
              onChange={handleSkechersCheckbox}
            />
            Skechers
          </label>
          <br />
          <label htmlFor="puma">
            <input
              id="puma"
              type="checkbox"
              checked={pumaIsChecked}
              onChange={handlePumaCheckbox}
            />
            Puma
          </label>
          <br />
          <label htmlFor="underarmor">
            <input
              id="underarmor"
              type="checkbox"
              checked={underArmorIsChecked}
              onChange={handleUnderArmorCheckbox}
            />
            Under Armor
          </label>
          <br />
          <label htmlFor="adidas">
            <input
              id="adidas"
              type="checkbox"
              checked={adidasIsChecked}
              onChange={handleAdidasCheckbox}
            />
            Adidas
          </label>
          <br />
          <span className={styles.checkBoxLabel}>Demographics</span>
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
    </div>
  );
};

export default FilterMenu;
