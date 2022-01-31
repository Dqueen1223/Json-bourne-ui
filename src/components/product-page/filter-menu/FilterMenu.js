import { React, useState } from 'react';
import styles from './filterMenu.module.css';
/**
 * @name FilterMenu
 * @description Displays Sidebar filter menu
 * @return component
 */
const FilterMenu = ({ setFilter, isActive }) => {
  const [filterArray, setFilterArray] = useState([]);
  const [checkboxIsChecked, setCheckboxIsChecked] = useState(false);
  const handleCheckbox = (e) => {
    const newArray = filterArray;
    if (!checkboxIsChecked) {
      newArray.push(`&${e.target.closest('div').previousElementSibling.innerText.toString().toLowerCase()}=${e.target.id}`);
      setFilterArray(newArray);
      setFilter(filterArray);
      setCheckboxIsChecked(!checkboxIsChecked);
    } else {
      const index = newArray.indexOf(`&${e.target.closest('div').previousElementSibling.innerText}=${e.target.id}`);
      newArray.splice(index, 1);
      setFilterArray(newArray);
      console.log(filterArray);
      setFilter('');
      setFilter(filterArray);
      setCheckboxIsChecked(!checkboxIsChecked);
    }

    return filterArray;
  };
  return (
    <div className={isActive ? styles.sidebar : styles.sideCollapsed}>
      <div className={styles.filterCheckbox}>
        <span className="checkBoxLabel">Brand</span>
        <div className={styles.fieldset}>
          <label htmlFor="nike">
            <input
              id="Nike"
              type="checkbox"
              onChange={handleCheckbox}
            />
            Nike
          </label>
          <br />
          <label htmlFor="reebok">
            <input
              id="Reebok"
              type="checkbox"
              onChange={handleCheckbox}
            />
            Reebok
          </label>
          <br />
          <label htmlFor="asics">
            <input
              id="Asics"
              type="checkbox"
              onChange={handleCheckbox}
            />
            Asics
          </label>
          <br />
          <label htmlFor="brooks">
            <input
              id="Brooks"
              type="checkbox"
              onChange={handleCheckbox}
            />
            Brooks
          </label>
          <br />
          <label htmlFor="skechers">
            <input
              id="Skechers"
              type="checkbox"
              onChange={handleCheckbox}
            />
            Skechers
          </label>
          <br />
          <label htmlFor="puma">
            <input
              id="Puma"
              type="checkbox"
              onChange={handleCheckbox}
            />
            Puma
          </label>
          <br />
          <label htmlFor="underarmor">
            <input
              id="Under Armor"
              type="checkbox"
              onChange={handleCheckbox}
            />
            Under Armor
          </label>
          <br />
          <label htmlFor="adidas">
            <input
              id="adidas"
              type="checkbox"
              onChange={handleCheckbox}
            />
            Adidas
          </label>
          <br />
        </div>
        <span className={styles.checkBoxLabel}>Category</span>
        <div className={styles.fieldset}>
          <label htmlFor="golf">
            <input
              id="Golf"
              type="checkbox"
              onChange={handleCheckbox}
            />
            Golf
          </label>
          <br />
          <label htmlFor="soccer">
            <input
              id="Soccer"
              type="checkbox"
              onChange={handleCheckbox}
            />
            Soccer
          </label>
          <br />
          <label htmlFor="basketball">
            <input
              id="Basketball"
              type="checkbox"
              onChange={handleCheckbox}
            />
            Basketball
          </label>
          <br />
          <label htmlFor="hockey">
            <input
              id="Hockey"
              type="checkbox"
              onChange={handleCheckbox}
            />
            Hockey
          </label>
          <br />
          <label htmlFor="football">
            <input
              id="Football"
              type="checkbox"
              onChange={handleCheckbox}
            />
            Football
          </label>
          <br />
          <label htmlFor="running">
            <input
              id="Running"
              type="checkbox"
              onChange={handleCheckbox}
            />
            Running
          </label>
          <br />
          <label htmlFor="baseball">
            <input
              id="Baseball"
              type="checkbox"
              onChange={handleCheckbox}
            />
            Baseball
          </label>
          <br />
          <label htmlFor="Skateboarding">
            <input
              id="Skateboarding"
              type="checkbox"
              onChange={handleCheckbox}
            />
            Skateboarding
          </label>
          <br />
          <label htmlFor="boxing">
            <input
              id="Boxing"
              type="checkbox"
              onChange={handleCheckbox}
            />
            Boxing
          </label>
          <br />
          <label htmlFor="weightlifting">
            <input
              id="Weightlifting"
              type="checkbox"
              onChange={handleCheckbox}
            />
            Weightlifting
          </label>
          <br />
        </div>
        <span className={styles.checkBoxLabel}>Demographics</span>
        <div className={styles.fieldset}>
          <label htmlFor="mens">
            <input
              id="Men"
              type="checkbox"
              onChange={handleCheckbox}
            />
            Mens
          </label>
          <br />
          <label htmlFor="womens">
            <input
              id="Women"
              type="checkbox"
              onChange={handleCheckbox}
            />
            Womens
          </label>
          <br />
          <label htmlFor="kids">
            <input
              id="Kid"
              type="checkbox"
              onChange={handleCheckbox}
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
