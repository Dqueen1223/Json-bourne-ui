import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import reactDom from 'react-dom';
import { FaPencilAlt, FaCheck } from 'react-icons/fa';
import CreatePromo from '../create-promo/CreatePromoModal';
import fetchProducts from './MaintenancePageService';
import './MaintenancePage.css';
import styles from '../product-page/ProductPage.module.css';
import Constants from '../../utils/constants';
import validateCreateProductForm from '../create-product/forms/FormValidation';
import UpdateProducts from './MaintenancePageUpdateService';
/**
 * @name useStyles
 * @description Material-ui styling for ProductCard component
 * @return styling
 */
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  }
}));
/**
 * @name MaintenancePage
 * @description  basic maintenance page with table of products from database
 * @returns component
 */
const MaintenancePage = () => {
  const classes = useStyles();
  const [apiError, setApiError] = useState(false);
  const [products, setProducts] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editable, setEditable] = useState(null);
  const [releaseEditable, setReleaseEdtiable] = useState('false');
  const [errors, setErrors] = useState({});
  const [previousProduct, setPreviousProduct] = useState({});
  const [displayErrors, setDisplayErrors] = useState(null);
  // const [activity, setActivity] = useState('');

  useEffect(() => {
    fetchProducts(setProducts, setApiError);
  }, []);

  const resetToDefaultTableData = (product) => {
    if (document.getElementById('errors')) {
      setDisplayErrors(null);
    }
    document.getElementById('name').innerHTML = product.name;
    document.getElementById('sku').innerHTML = product.sku;
    document.getElementById('description').innerHTML = product.description;
    document.getElementById('demographic').innerHTML = product.demographic;
    document.getElementById('category').innerHTML = product.category;
    document.getElementById('type').innerHTML = product.type;
    document.getElementById('releaseDate').innerHTML = product.releaseDate;
    document.getElementById('primaryColorCode').innerHTML = product.primaryColorCode;
    document.getElementById('secondaryColorCode').innerHTML = product.secondaryColorCode;
    document.getElementById('styleNumber').innerHTML = product.styleNumber;
    document.getElementById('globalProductCode').innerHTML = product.globalProductCode;
    document.getElementById('active').value = product.active;
    document.getElementById('brand').innerHTML = product.brand;
    document.getElementById('imageSrc').innerHTML = product.imageSrc;
    document.getElementById('price').innerHTML = product.price;
    document.getElementById('material').innerHTML = product.material;
    document.getElementById('quantity').innerHTML = product.quantity;
  };

  const clickEditMaitenance = (e, product) => {
    e.preventDefault();
    if (editable != null) {
      resetToDefaultTableData(previousProduct);
    }
    setReleaseEdtiable('false');
    setPreviousProduct(product);
    setEditable(product.id);
    const today = new Date();
    const releaseDate = new Date(
      product.releaseDate
    );
    if (releaseDate.getTime() > today.getTime()) {
      setReleaseEdtiable(null);
      setReleaseEdtiable('true');
    }
  };
  const cancelEditing = (e, product) => {
    e.preventDefault();
    resetToDefaultTableData(product);
    setEditable(null);
    setErrors({});
  };

  const errorRow = () => (
    <tr id="errors">
      <td />
      <td />
      <td>{errors.name}</td>
      <td>{errors.sku}</td>
      <td>{errors.description}</td>
      <td>{errors.demographic}</td>
      <td>{errors.category}</td>
      <td>{errors.type}</td>
      <td>{errors.releaseDate}</td>
      <td>{errors.primaryColorCode}</td>
      <td>{errors.secondaryColorCode}</td>
      <td>{errors.styleNumber}</td>
      <td>{errors.globalProductCode}</td>
      <td>{errors.active}</td>
      <td>{errors.brand}</td>
      <td>{errors.imageSrc}</td>
      <td>{errors.material}</td>
      <td>{errors.price}</td>
      <td>{errors.quantity}</td>
    </tr>
  );
  const submitEdit = (e, product) => {
    e.preventDefault();
    setDisplayErrors(null);
    console.log(errors);
    const name = document.getElementById('name');
    const sku = document.getElementById('sku');
    const description = document.getElementById('description');
    const demographic = document.getElementById('demographic');
    const category = document.getElementById('category');
    const type = document.getElementById('type');
    const releaseDate = document.getElementById('releaseDate');
    const primaryColorCode = document.getElementById('primaryColorCode');
    const secondaryColorCode = document.getElementById('secondaryColorCode');
    const styleNumber = document.getElementById('styleNumber');
    const globalProductCode = document.getElementById('globalProductCode');
    let active = document.getElementById('active');
    const brand = document.getElementById('brand');
    const imageSrc = document.getElementById('imageSrc');
    const price = document.getElementById('price');
    const material = document.getElementById('material');
    const quantity = document.getElementById('quantity');

    const submitedProduct = {
      id: product.id,
      name: name.innerHTML,
      sku: sku.innerHTML,
      description: description.innerHTML,
      demographic: demographic.innerHTML,
      category: category.innerHTML,
      type: type.innerHTML,
      releaseDate: releaseDate.innerHTML,
      primaryColorCode: primaryColorCode.innerHTML,
      secondaryColorCode: secondaryColorCode.innerHTML,
      styleNumber: styleNumber.innerHTML,
      globalProductCode: globalProductCode.innerHTML,
      active: active.value,
      brand: brand.innerHTML,
      imageSrc: imageSrc.innerHTML,
      material: material.innerHTML,
      price: price.innerHTML,
      quantity: quantity.innerHTML
    };
    const idList = Object.keys(submitedProduct);
    const errorList = validateCreateProductForm(submitedProduct, idList);
    if (
      !releaseDate.innerHTML.match(
        /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T\d{2}:\d{2}:\d{2}(\.\d{3})?$/
      )
    ) {
      errorList.releaseDate = 'Release Date must match the format of YYYY-MM-DDT00:00:00';
    }
    for (let i = 0; i < idList.length; i += 1) {
      const id = idList[i];
      if (errorList[id]) {
        errors[id] = errorList[id];
      }
    }
    setErrors(errors);
    if (active.value === 'true') {
      active = true;
    } if (active.value === 'false') {
      active = false;
    }
    const newProduct = {
      id: product.id,
      name: name.innerHTML,
      sku: sku.innerHTML,
      description: description.innerHTML,
      demographic: demographic.innerHTML,
      category: category.innerHTML,
      type: type.innerHTML,
      releaseDate: releaseDate.innerHTML,
      primaryColorCode: primaryColorCode.innerHTML,
      secondaryColorCode: secondaryColorCode.innerHTML,
      styleNumber: styleNumber.innerHTML,
      globalProductCode: globalProductCode.innerHTML,
      active,
      brand: brand.innerHTML,
      imageSrc: imageSrc.innerHTML,
      material: material.innerHTML,
      price: Number(price.innerHTML),
      quantity: Number(quantity.innerHTML)
    };
    if (Object.keys(errors).length === 0) {
      UpdateProducts(newProduct, setApiError);
      setEditable(null);
    } else {
      setDisplayErrors(product.id);
    }
  };

  const editRow = (product) => (
    <>
      <tr key={product.id} className="ProductCells" id="editable">
        <td className="ProductCells">
          <button
            type="submit"
            onClick={(e) => {
              if (Object.entries(errors).length > 0) {
                Object.keys(errors).forEach((key) => delete errors[key]);
              }
              submitEdit(e, product);
            }}
            className="Confirm"
            id="checkButton"
          >
            <FaCheck id="check" />
          </button>
          <button
            type="button"
            onClick={(e) => cancelEditing(e, product)}
            className="Cancel"
            id="X"
          >
            X
          </button>
        </td>
        <td className="ProductCells">{product.id}</td>
        <td className="ProductCells" contentEditable="true" id="name">
          {product.name}
        </td>
        <td className="ProductCells" contentEditable="true" id="sku">
          {product.sku}
        </td>
        <td className="ProductCells" contentEditable="true" id="description">
          {product.description}
        </td>
        <td className="ProductCells" contentEditable="true" id="demographic">
          {product.demographic}
        </td>
        <td className="ProductCells" contentEditable="true" id="category">
          {product.category}
        </td>
        <td className="ProductCells" contentEditable="true" id="type">
          {product.type}
        </td>
        <td
          className="ProductCells"
          contentEditable={releaseEditable}
          id="releaseDate"
        >
          {product.releaseDate}
        </td>
        <td
          className="ProductCells"
          contentEditable="true"
          id="primaryColorCode"
        >
          {product.primaryColorCode}
        </td>
        <td
          className="ProductCells"
          contentEditable="true"
          id="secondaryColorCode"
        >
          {product.secondaryColorCode}
        </td>
        <td className="ProductCells" contentEditable="true" id="styleNumber">
          {product.styleNumber}
        </td>
        <td
          className="ProductCells"
          contentEditable="true"
          id="globalProductCode"
        >
          {product.globalProductCode}
        </td>
        <td className="ProductCells" contentEditable="true" id="active">
          <select id="Activity">
            <option value="true">true</option>
            <option value="false">false</option>
            {/* {product.active.toString()} */}
          </select>
        </td>
        <td className="ProductCells" contentEditable="true" id="brand">
          {product.brand}
        </td>
        <td className="ProductCells" contentEditable="true" id="imageSrc">
          {product.imageSrc}
        </td>
        <td className="ProductCells" contentEditable="true" id="material">
          {product.material}
        </td>
        <td className="ProductCells" contentEditable="true" id="price">
          {product.price.toFixed(2)}
        </td>
        <td
          className="ProductCells"
          contentEditable="true"
          id="quantity"
          value={product.quantity}
        >
          {product.quantity}
        </td>
      </tr>
    </>
  );

  const viewRow = (product) => (
    <tr key={product.id} className="ProductCells">
      <td className="ProductCells">
        <span>
          <button
            type="button"
            onClick={(e) => clickEditMaitenance(e, product)}
            className="editbutton"
          >
            <FaPencilAlt className="editIcon" alt="editIcon" />
          </button>
        </span>
      </td>
      <td className="ProductCells">{product.id}</td>
      <td className="ProductCells">{product.name}</td>
      <td className="ProductCells">{product.sku}</td>
      <td className="ProductCells">{product.description}</td>
      <td className="ProductCells">{product.demographic}</td>
      <td className="ProductCells">{product.category}</td>
      <td className="ProductCells">{product.type}</td>
      <td className="ProductCells">{product.releaseDate}</td>
      <td className="ProductCells">{product.primaryColorCode}</td>
      <td className="ProductCells">{product.secondaryColorCode}</td>
      <td className="ProductCells">{product.styleNumber}</td>
      <td className="ProductCells">{product.globalProductCode}</td>
      <td className="ProductCells">{String(product.active)}</td>
      <td className="ProductCells">{product.brand}</td>
      <td className="ProductCells">{product.imageSrc}</td>
      <td className="ProductCells">{product.material}</td>
      <td className="ProductCells">{product.price.toFixed(2)}</td>
      <td className="ProductCells">{product.quantity}</td>
    </tr>
  );
  const bothRows = (product) => (
    <>
      {editRow(product)}
      {Object.entries(errors).length > 0 ? errorRow() : null}
    </>
  );

  return (
    <div className="Maintenance">
      {apiError && (
        <p className={styles.errMsg} data-testid="errMsg">
          {Constants.API_ERROR}
        </p>
      )}

      <div className="Buttons">
        <Link to="/maintenance/create">
          <button type="button" className="createButton">
            Create Product
          </button>
        </Link>
        {modalIsOpen
          && reactDom.createPortal(
            <CreatePromo
              className={classes.root}
              closeModal={setModalIsOpen}
            />,
            document.getElementById('root')
          )}
        <button
          type="button"
          className="promoButton"
          onClick={() => {
            setModalIsOpen(true);
          }}
        >
          Create Promotion
        </button>
      </div>
      <div className="ProductTable">
        <table className="Product">
          <thead>
            <th>Edit</th>
            <th>Id</th>
            <th>Name</th>
            <th>SKU</th>
            <th>Description</th>
            <th>Demographic</th>
            <th>Category</th>
            <th>Type</th>
            <th>Release Date</th>
            <th>Primary Color</th>
            <th>Secondary Color</th>
            <th>Style Number</th>
            <th>Global Product Code</th>
            <th>Active</th>
            <th>Brand</th>
            <th>Image Source</th>
            <th>Material</th>
            <th>Price</th>
            <th>Quantity</th>
          </thead>
          <tbody id="tableBody">
            {products.map((product) => (
              <>
                {editable === product.id || displayErrors === true
                  ? bothRows(product)
                  : viewRow(product)}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default MaintenancePage;
