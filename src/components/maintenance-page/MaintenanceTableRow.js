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
  const [releaseEditable, setReleaseEditiable] = useState('false');
  const [errors, setErrors] = useState({});
  const [displayErrors, setDisplayErrors] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState({});

  useEffect(() => {
    fetchProducts(setProducts, setApiError);
  }, []);

  const checkReleaseDate = (product) => {
    const today = new Date();
    const releaseDate = new Date(product.releaseDate);
    if (releaseDate.getTime() > today.getTime()) {
      setReleaseEditiable(null);
      setReleaseEditiable('true');
    }
  };
  const clickEditMaitenance = (e, product) => {
    if (editable != null) {
      fetchProducts(setProducts, setApiError);
    }
    setErrors({});
    setReleaseEditiable('false');
    setEditable(product.id);
    checkReleaseDate(product);
    setUpdatedProduct(product);
  };
  const cancelEditing = () => {
    fetchProducts(setProducts, setApiError);
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

  const updateProduct = (e) => {
    setUpdatedProduct({ ...updatedProduct, [e.target.id]: e.target.innerText });
  };
  const updatedProductDropdown = (e) => {
    setUpdatedProduct({ ...updatedProduct, [e.target.id]: e.target.value });
  };

  const submitEdit = async (e, product) => {
    setDisplayErrors(null);
    if (updatedProduct.active === 'true') {
      updatedProduct.active = true;
    } else { updatedProduct.active = false; }
    const idList = Object.keys(updatedProduct);
    const errorList = validateCreateProductForm(updatedProduct, idList);
    if (
      !updatedProduct.releaseDate.slice(0, 10).match(
        /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
      )
    ) {
      errorList.releaseDate = 'Release Date must match the format of YYYY-MM-DD';
    }
    for (let i = 0; i < idList.length; i += 1) {
      const id = idList[i];
      if (errorList[id]) {
        errors[id] = errorList[id];
      }
    }
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      await UpdateProducts(updatedProduct, setApiError);
      setEditable(null);
      fetchProducts(setProducts, setApiError);
    } else {
      setDisplayErrors([product.id]);
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
                displayErrors.shift();
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
            onClick={() => cancelEditing(product)}
            className="Cancel"
            id="X"
          >
            X
          </button>
        </td>
        <td className="ProductCells">{product.id}</td>
        <td
          className={`ProductCells ${errors.name ? 'error' : 'editable'}`}
          contentEditable="true"
          id="name"
          onMouseOut={(e) => updateProduct(e)}
          onBlur={(e) => updateProduct(e)}
        >
          {product.name}
        </td>
        <td
          className={`ProductCells ${errors.sku ? 'error' : 'editable'}`}
          contentEditable="true"
          id="sku"
          onMouseOut={(e) => updateProduct(e)}
          onBlur={(e) => updateProduct(e)}
        >
          {product.sku}
        </td>
        <td
          className={`ProductCells ${
            errors.description ? 'error' : 'editable'
          }`}
          contentEditable="true"
          id="description"
          onMouseOut={(e) => updateProduct(e)}
          onBlur={(e) => updateProduct(e)}
        >
          {product.description}
        </td>
        <td className="ProductCells editable">
          <select id="demographic" onChange={(e) => updatedProductDropdown(e)}>
            <option value={product.demographic}>{product.demographic}</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </td>
        <td
          className={`ProductCells ${errors.category ? 'error' : 'editable'}`}
          contentEditable="true"
          id="category"
          onMouseOut={(e) => updateProduct(e)}
          onBlur={(e) => updateProduct(e)}
        >
          {product.category}
        </td>
        <td
          className={`ProductCells ${errors.type ? 'error' : 'editable'}`}
          contentEditable="true"
          id="type"
          onMouseOut={(e) => updateProduct(e)}
          onBlur={(e) => updateProduct(e)}
        >
          {product.type}
        </td>
        <td
          className="ProductCells"
          contentEditable={releaseEditable}
          id="releaseDate"
          onMouseOut={(e) => updateProduct(e)}
          onBlur={(e) => updateProduct(e)}
        >
          {product.releaseDate.slice(0, 10)}
        </td>
        <td
          className={`ProductCells ${
            errors.primaryColorCode ? 'error' : 'editable'
          }`}
          contentEditable="true"
          id="primaryColorCode"
          onMouseOut={(e) => updateProduct(e)}
          onBlur={(e) => updateProduct(e)}
        >
          {product.primaryColorCode}
        </td>
        <td
          className={`ProductCells ${
            errors.secondaryColorCode ? 'error' : 'editable'
          }`}
          contentEditable="true"
          id="secondaryColorCode"
          onMouseOut={(e) => updateProduct(e)}
          onBlur={(e) => updateProduct(e)}
        >
          {product.secondaryColorCode}
        </td>
        <td
          className={`ProductCells ${
            errors.styleNumber ? 'error' : 'editable'
          }`}
          contentEditable="true"
          id="styleNumber"
          onMouseOut={(e) => updateProduct(e)}
          onBlur={(e) => updateProduct(e)}
        >
          {product.styleNumber}
        </td>
        <td
          className={`ProductCells ${
            errors.globalProductCode ? 'error' : 'editable'
          }`}
          contentEditable="true"
          id="globalProductCode"
          onMouseOut={(e) => updateProduct(e)}
          onBlur={(e) => updateProduct(e)}
        >
          {product.globalProductCode}
        </td>
        <td className={`ProductCells ${errors.active ? 'error' : 'editable'}`}>
          <select id="active" onChange={(e) => updatedProductDropdown(e)}>
            <option value={product.active.toString()}>
              {product.active.toString()}
            </option>
            <option value="true">true</option>
            <option value="false">false</option>
          </select>
        </td>
        <td
          className={`ProductCells ${errors.brand ? 'error' : 'editable'}`}
          contentEditable="true"
          id="brand"
          onMouseOut={(e) => updateProduct(e)}
          onBlur={(e) => updateProduct(e)}
        >
          {product.brand}
        </td>
        <td
          className={`ProductCells ${errors.imageSrc ? 'error' : 'editable'}`}
          contentEditable="true"
          id="imageSrc"
          onMouseOut={(e) => updateProduct(e)}
          onBlur={(e) => updateProduct(e)}
        >
          {product.imageSrc}
        </td>
        <td
          className={`ProductCells ${errors.material ? 'error' : 'editable'}`}
          contentEditable="true"
          id="material"
          onMouseOut={(e) => updateProduct(e)}
          onBlur={(e) => updateProduct(e)}
        >
          {product.material}
        </td>
        <td
          className={`ProductCells ${errors.price ? 'error' : 'editable'}`}
          contentEditable="true"
          id="price"
          onMouseOut={(e) => updateProduct(e)}
          onBlur={(e) => updateProduct(e)}
        >
          {product.price.toFixed(2)}
        </td>
        <td
          className={`ProductCells ${errors.quantity ? 'error' : 'editable'}`}
          contentEditable="true"
          id="quantity"
          onMouseOut={(e) => updateProduct(e)}
          onBlur={(e) => updateProduct(e)}
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
      <td className="ProductCells">{product.releaseDate.slice(0, 10)}</td>
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
                {editable === product.id || displayErrors === product.id
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
