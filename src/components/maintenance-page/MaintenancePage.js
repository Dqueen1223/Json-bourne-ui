import React, { useState, useEffect } from 'react';
import fetchProducts from '../product-page/ProductPageService';
import styles from '../../index.css';
import Constants from '../../utils/constants';

const MaintenancePage = () => {
  const [products, setProducts] = useState([]);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    fetchProducts(setProducts, setApiError);
  }, []);

  return (
    <div className="Maintenance">
      {apiError && <p className={styles.errMsg} data-testid="errMsg">{Constants.API_ERROR}</p>}
      {products.map((product) => (
        <table className="ProductTable">
          <tr key={product.id}>
            {Object.values(product).map((val) => (
              <td>{val}</td>
            ))}
          </tr>
        </table>
      ))}
    </div>
  );
};
export default MaintenancePage;
