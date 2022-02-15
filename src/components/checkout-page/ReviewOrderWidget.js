import React from 'react';
import { useCart } from './CartContext';
import OrderItem from './OrderItem';
import { getSubtotal } from './ReviewOrderWidgetService';
import styles from './ReviewOrderWidget.module.css';
import cartLogic from './cartLogic';

/**
 * @name ReviewOrderWidget
 * @description Displays order items and subtotal
 * @return component
 */
const ReviewOrderWidget = ({ setTotal }) => {
  const {
    state: { products }
  } = useCart();
  cartLogic();
  setTotal(Number(getSubtotal(products).substring(1)));
  return (
    <>
      {products.map(({
        price, title, description, quantity
      }) => (
        <OrderItem
          key={title}
          price={price}
          title={title}
          description={description}
          quantity={quantity}
        />
      ))}
      <hr />
      <div className={styles.subtotal}>
        <div>
          <p>Subtotal</p>
        </div>
        <div className={styles.price}>
          <p>{getSubtotal(products)}</p>
        </div>
      </div>
    </>
  );
};
export default ReviewOrderWidget;
