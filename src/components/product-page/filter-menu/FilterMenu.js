import { React, useState } from 'react';
import styles from './filterMenu.module.css';

/**
 * @name FilterMenu
 * @description Displays Sidebar filter menu
 * @return component
 */
const FilterMenu = ({ setFilter, isActive }) => {
  const [filterArray, setFilterArray] = useState([]);

  /**
   * @name handleCheckbox
   * @description When a checkbox is checked in the filter menu, it adds that filter to the endpoint
   * @param {e} e - mouseclick event
   */
  const handleCheckbox = (e) => {
    const newArray = filterArray;
    const checkedBox = `&${e.target.closest('div').previousElementSibling.innerText.toString().toLowerCase()}=${e.target.id}`;
    // let combinedQueries = filterArray;
    // for (let i = 0; i < newArray.length; i += 1) {
    //   combinedQueries += newArray[i];
    // }
    // if a checkbox is checked
    if (e.target.checked === true) {
      // Add the filter query string to the array.
      newArray.push(checkedBox);
      console.log(`newArray after pushing: ${newArray}`);
      // Set the filterArray state to the contents of newArray.
      setFilterArray(newArray);
      console.log(`filterArray after setting it to newArray ${filterArray}`);
      // Set the filter state from ProductPage.js to filterArray.
      setFilter(filterArray.join(''));
    } else {
      // Find the index of the query from the box that was unchecked.
      const index = newArray.indexOf(checkedBox);
      // Remove the filter query.
      newArray.splice(index, 1);
      console.log(`newArray after splicing: ${newArray}`);
      // Set the filter array to the newArray without the removed filter.
      setFilterArray(newArray);
      console.log(`filterArray after setting it to spliced newArray: ${filterArray}`);
      setFilter(filterArray.join(''));
    }
  };
  return (
    <div className={isActive ? styles.sidebar : styles.sideCollapsed}>
      <div className={styles.filterCheckbox}>
        <span className={styles.checkBoxLabel}>Brand</span>
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
        <span className={styles.checkBoxLabel}>Demographic</span>
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
              id="Kids"
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
