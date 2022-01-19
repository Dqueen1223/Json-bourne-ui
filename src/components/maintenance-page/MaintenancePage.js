import React, { useState, useEffect } from 'react';
import fetchProducts from './MaintenancePageService';
import './MaintenancePage.css';
import styles from '../product-page/ProductPage.module.css'
import Constants from '../../utils/constants';

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
              <tr key={product.id} className="Product">
                <td className="Product">{product.id}</td>
                <td className="Product">{product.name}</td>
                <td className="Product">{product.sku}</td>
                <td className="Product">{product.description}</td>
                <td className="Product">{product.demographic}</td>
                <td className="Product">{product.category}</td>
                <td className="Product">{product.type}</td>
                <td className="Product">{product.releaseDate}</td>
                <td className="Product">{product.primaryColorCode}</td>
                <td className="Product">{product.secondaryColorCode}</td>
                <td className="Product">{product.styleNumber}</td>
                <td className="Product">{product.globalProductCode}</td>
                <td className="Product">{String(product.active)}</td>
                <td className="Product">{product.brand}</td>
                <td className="Product">{product.imageSrc}</td>
                <td className="Product">{product.material}</td>
                <td className="Product">{product.price.toFixed(2)}</td>
                <td className="Product">{product.quantity}</td>   
              </tr>
            ))}
          </tbody>
            </table>
        </div>
     
    </div>
  );

};
export default MaintenancePage;
