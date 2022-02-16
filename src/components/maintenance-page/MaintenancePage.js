import React, { useState, useEffect, Fragment } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import reactDom from 'react-dom';
import { FaPencilAlt } from 'react-icons/fa';
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
  const [updateProduct, setUpdateProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [Editable, setEditable] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchProducts(setProducts, setApiError);
  }, []);

  const onProductChange = (e) => {
    setUpdateProduct({ ...updateProduct, [e.id]: e.innerHTML });
  };

  const clickEditMaitenance = (e, product) => {
    e.preventDefault();
    setEditable(product.id);
  };
  const cancelEditing = (e) => {
    e.preventDefault();
    setEditable(null);
  };
  const submitEdit = async (e, product) => {
    e.preventDefault();

    const name = document.getElementById('name');
    const sku = document.getElementById('sku');
    const description = document.getElementById('description');
    const demographic = document.getElementById('demographic');
    const category = document.getElementById('category');
    const type = document.getElementById('type');
    const releaseDate = document.getElementById('releaseDate');
    const primaryColorCode = document.getElementById('primaryColorCode');
    const secondaryColorCode = document.getElementById('secondaryColorCode');
    const globalProductCode = document.getElementById('globalProductCode');
    let active = document.getElementById('active').innerHTML;
    if (active === 'true') {
      active = true;
    } else active = false;
    const brand = document.getElementById('brand');
    const imageSrc = document.getElementById('imageSrc');
    const price = Number(document.getElementById('price').innerHTML);
    const material = document.getElementById('material');
    const quantity = parseInt(document.getElementById('quantity').innerHTML, 10);
    updateProduct.quantity = parseInt(updateProduct.quantity, 10);

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
      styleNumber: product.styleNumber,
      globalProductCode: globalProductCode.innerHTML,
      active,
      brand: brand.innerHTML,
      imageSrc: imageSrc.innerHTML,
      material: material.innerHTML,
      price,
      quantity
    };
    const idList = Object.keys(newProduct);
    const errorList = validateCreateProductForm(newProduct, idList);
    for (let i = 0; i < idList.length; i += 1) {
      const id = idList[i];
      if (errorList[id]) {
        errors[id] = errorList[id];
      }
    }
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      setUpdateProduct(newProduct);
      UpdateProducts(newProduct, setApiError);
      setErrors(errors);
      setEditable(null);
    } else toast.error(`${JSON.stringify(errors)}`);
    // console.log(errors);
  };
  const editRow = (product) => (
    <tr key={product.id} className="ProductCells">
      <td className="ProductCells">
        <button
          type="submit"
          onClick={(e) => submitEdit(e, product)}
          className="Confirm"
        >
          Confirm
        </button>
        <button
          type="button"
          onClick={(e) => cancelEditing(e)}
          className="Cancel"
        >
          Cancel
        </button>
      </td>
      <td className="ProductCells">{product.id}</td>
      <td
        className="ProductCells"
        contentEditable="true"
        id="name"
        onProductChange={onProductChange}
      >
        {product.name}
      </td>
      <td
        className="ProductCells"
        contentEditable="true"
        id="sku"
      >
        {product.sku}
      </td>
      <td
        className="ProductCells"
        contentEditable="true"
        id="description"
      >
        {product.description}
      </td>
      <td
        className="ProductCells"
        contentEditable="true"
        id="demographic"
      >
        {product.demographic}
      </td>
      <td
        className="ProductCells"
        contentEditable="true"
        id="category"
      >
        {product.category}
      </td>
      <td
        className="ProductCells"
        contentEditable="true"
        id="type"
      >
        {product.type}
      </td>
      <td
        className="ProductCells"
        contentEditable="true"
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
      <td
        className="ProductCells"
        contentEditable="true"
        id="styleNumber"
      >
        {product.styleNumber}
      </td>
      <td
        className="ProductCells"
        contentEditable="true"
        id="globalProductCode"
      >
        {product.globalProductCode}
      </td>
      <td
        className="ProductCells"
        contentEditable="true"
        id="active"
      >
        {String(product.active)}
      </td>
      <td
        className="ProductCells"
        contentEditable="true"
        id="brand"
      >
        {product.brand}
      </td>
      <td
        className="ProductCells"
        contentEditable="true"
        id="imageSrc"
      >
        {product.imageSrc}
      </td>
      <td
        className="ProductCells"
        contentEditable="true"
        id="material"
      >
        {product.material}
      </td>
      <td
        className="ProductCells"
        contentEditable="true"
        id="price"
      >
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
  );
  const readOnlyRow = (product) => (
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
          <tbody>
            {products.map((product) => (
              <>
                {Editable === product.id
                  ? editRow(product)
                  : readOnlyRow(product)}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default MaintenancePage;
