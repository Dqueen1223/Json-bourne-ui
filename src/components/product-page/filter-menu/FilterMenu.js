import React from 'react';
import styles from './filterMenu.module.css';
/**
 * @name FilterMenu
 * @description Displays Sidebar filter menu
 * @return component
 */
const FilterMenu = ({ setFilter, isActive }) => {
  // const [menIsChecked, setMenIsChecked] = useState(false);
  // const [womenIsChecked, setWomenIsChecked] = useState(false);
  // const [kidsIsChecked, setKidsIsChecked] = useState(false);
  // const [nikeIsChecked, setNikeIsChecked] = useState(false);
  // const [reebokIsChecked, setReebokIsChecked] = useState(false);
  // const [asicsIsChecked, setAsicsIsChecked] = useState(false);
  // const [brooksIsChecked, setBrooksIsChecked] = useState(false);
  // const [skechersIsChecked, setSkechersIsChecked] = useState(false);
  // const [pumaIsChecked, setPumaIsChecked] = useState(false);
  // const [underArmorIsChecked, setUnderArmorIsChecked] = useState(false);
  // const [adidasIsChecked, setAdidasIsChecked] = useState(false);

  // const [checkboxIsChecked, setCheckboxIsChecked] = useState(false);
  // const checkboxReset = () => {
  //   setMenIsChecked(false);
  //   setWomenIsChecked(false);
  //   setKidsIsChecked(false);
  // };
  const filterArray = [];
  // try just checking if the e.target.id checked is true, then setting the filter
  const handleCheckbox = (e) => {
    if (e.target.checked === true) {
      filterArray.push(`&${e.target.closest('div').previousElementSibling.innerText.toString().toLowerCase()}=${e.target.id}`);
      setFilter(filterArray);
      // setCheckboxIsChecked(true);
    } else {
      const index = filterArray.indexOf(`&${e.target.closest('div').previousElementSibling.innerText}=${e.target.id}`);
      filterArray.splice(index, 1);
      setFilter(filterArray);
      // setCheckboxIsChecked(false);
    }
    console.log(filterArray);
    // setCheckboxIsChecked(!checkboxIsChecked);
  };
  // const handleCheckbox = (e) => {
  //   if (!this.checkboxIsChecked) {
  //     filterArray.push(`&${e.target.closest('div').previousElementSibling.innerText}
  // =${ e.target.id }`);
  //     setFilter(filterArray);
  //   }
  //   console.log(filterArray);
  //   setCheckboxIsChecked(!this.checkboxIsChecked);
  // };

  // const handleMensCheckbox = () => {
  //   checkboxReset();
  //   if (!menIsChecked) {
  //     setFilter('&demographic=Men');
  //   } else {
  //     setFilter('');
  //   }
  //   setMenIsChecked(!menIsChecked);
  // };

  // const handleWomensCheckbox = () => {
  //   checkboxReset();
  //   if (!womenIsChecked) {
  //     setFilter('&demographic=Women');
  //   } else {
  //     setFilter('');
  //   }
  //   setWomenIsChecked(!womenIsChecked);
  // };

  // const handleKidsCheckbox = () => {
  //   checkboxReset();
  //   if (!kidsIsChecked) {
  //     setFilter('&demographic=Kids');
  //   } else {
  //     setFilter('');
  //   }
  //   setKidsIsChecked(!kidsIsChecked);
  // };

  // const handleNikeCheckbox = () => {
  //   if (!nikeIsChecked) {
  //     setFilter('&brand=Nike');
  //   } else {
  //     setFilter('');
  //   }
  //   setNikeIsChecked(!nikeIsChecked);
  // };

  // const handleReebokCheckbox = () => {
  //   if (!reebokIsChecked) {
  //     setFilter('&brand=Reebok');
  //   } else {
  //     setFilter('');
  //   }
  //   setReebokIsChecked(!reebokIsChecked);
  // };

  // const handleAsicsCheckbox = () => {
  //   if (!nikeIsChecked) {
  //     setFilter('&brand=Asics');
  //   } else {
  //     setFilter('');
  //   }
  //   setAsicsIsChecked(!asicsIsChecked);
  // };

  // const handleBrooksCheckbox = () => {
  //   if (!asicsIsChecked) {
  //     setFilter('&brand=Brooks');
  //   } else {
  //     setFilter('');
  //   }
  //   setBrooksIsChecked(!brooksIsChecked);
  // };

  // const handleSkechersCheckbox = () => {
  //   if (!skechersIsChecked) {
  //     setFilter('&brand=Skechers');
  //   } else {
  //     setFilter('');
  //   }
  //   setSkechersIsChecked(!skechersIsChecked);
  // };

  // const handlePumaCheckbox = () => {
  //   if (!pumaIsChecked) {
  //     setFilter('&brand=Puma');
  //   } else {
  //     setFilter('');
  //   }
  //   setPumaIsChecked(!pumaIsChecked);
  // };

  // const handleUnderArmorCheckbox = () => {
  //   if (!underArmorIsChecked) {
  //     setFilter('&brand=Under&#160;Armor');
  //   } else {
  //     setFilter('');
  //   }
  //   setUnderArmorIsChecked(!underArmorIsChecked);
  // };

  // const handleAdidasCheckbox = () => {
  //   if (!adidasIsChecked) {
  //     setFilter('&brand=Adidas');
  //   } else {
  //     setFilter('');
  //   }
  //   setAdidasIsChecked(!adidasIsChecked);
  // };
  return (
    <div className={isActive ? styles.sidebar : styles.sideCollapsed}>
      <div className={styles.filterCheckbox}>
        <span className="checkBoxLabel">Brand</span>
        <div className={styles.fieldset}>
          <label htmlFor="nike">
            <input
              id="Nike"
              type="checkbox"
             // checked={checkboxIsChecked}
              onChange={handleCheckbox}
            />
            Nike
          </label>
          <br />
          <label htmlFor="reebok">
            <input
              id="Reebok"
              type="checkbox"
             // checked={checkboxIsChecked}
              onChange={handleCheckbox}
            />
            Reebok
          </label>
          <br />
          <label htmlFor="asics">
            <input
              id="Asics"
              type="checkbox"
             // checked={checkboxIsChecked}
              onChange={handleCheckbox}
            />
            Asics
          </label>
          <br />
          <label htmlFor="brooks">
            <input
              id="Brooks"
              type="checkbox"
             // checked={checkboxIsChecked}
              onChange={handleCheckbox}
            />
            Brooks
          </label>
          <br />
          <label htmlFor="skechers">
            <input
              id="Skechers"
              type="checkbox"
             // checked={checkboxIsChecked}
              onChange={handleCheckbox}
            />
            Skechers
          </label>
          <br />
          <label htmlFor="puma">
            <input
              id="Puma"
              type="checkbox"
             // checked={checkboxIsChecked}
              onChange={handleCheckbox}
            />
            Puma
          </label>
          <br />
          <label htmlFor="underarmor">
            <input
              id="Under Armor"
              type="checkbox"
            //  checked={checkboxIsChecked}
              onChange={handleCheckbox}
            />
            Under Armor
          </label>
          <br />
          <label htmlFor="adidas">
            <input
              id="adidas"
              type="checkbox"
            //  checked={checkboxIsChecked}
              onChange={handleCheckbox}
            />
            Adidas
          </label>
          <br />
          <span className={styles.checkBoxLabel}>Demographics</span>
          <div className={styles.fieldset}>
            <label htmlFor="mens">
              <input
                id="Men"
                type="checkbox"
              //  checked={checkboxIsChecked}
                onChange={handleCheckbox}
              />
              Mens
            </label>
            <br />
            <label htmlFor="womens">
              <input
                id="Women"
                type="checkbox"
              //  checked={checkboxIsChecked}
                onChange={handleCheckbox}
              />
              Womens
            </label>
            <br />
            <label htmlFor="kids">
              <input
                id="Kid"
                type="checkbox"
              //  checked={checkboxIsChecked}
                onChange={handleCheckbox}
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
