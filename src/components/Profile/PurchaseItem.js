import React, { useState, useEffect } from 'react';
import './ProfilePage.css';
import fetchProduct from './ProfileProductService';

const PurchaseItem = ({ item }) => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetchProduct(item.productId, setProduct);
  }, [item]);
  // const [collapsibleOpen, setCollapsibleOpen] = useState(false);
  return (
    <div className="purchaseItem">
      <div className="productName">
        {product != null && product.name}
      </div>
      <div className="productQuantity">
        {item.quantity}
      </div>
      <div className="productPrice">
        $
        {product != null && (product.price * item.quantity).toFixed(2)}
      </div>

    </div>
  );
};
export default PurchaseItem;
