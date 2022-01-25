import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchProducts from './MaintenancePageService';
import './MaintenancePage.css';
import styles from '../product-page/ProductPage.module.css';
import Constants from '../../utils/constants';
// import styles2 from '../checkout-page/CheckoutPage.module.css';

/**
 * @name MaintenancePage
 * @description  basic maintenance page with table of products from database
 * @returns component
 */
const MaintenancePage = () => {
  const [apiError, setApiError] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts(setProducts, setApiError);
  }, []);

  return (
    <div className="Maintenance">
      {apiError && <p className={styles.errMsg} data-testid="errMsg">{Constants.API_ERROR}</p>}

      <div className="Buttons">
        <Link to="/maintenance/create">
          <button type="button" className="createButton">
            Create Product
          </button>
        </Link>
      </div>
      <div className="ProductTable">

        <table className="Product">
          <thead>
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
              <tr key={product.id} className="ProductCells">
                <td className="ProductCells">{product.id}</td>
                <td className="ProductCells">{product.name}</td>
                <td className="ProductCells">{product.sku}</td>
                <td className="ProductCells">{product.demographic}</td>
                <td className="ProductCells">{product.description}</td>
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
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};
export default MaintenancePage;
