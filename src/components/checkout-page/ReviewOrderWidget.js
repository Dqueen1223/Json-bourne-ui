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
<<<<<<< HEAD
const ReviewOrderWidget = ({ shippingFee }) => {
=======
const ReviewOrderWidget = ({ setTotal }) => {
>>>>>>> 58a9b3b1ce0b055ad236031baf92d3284bf28d58
  const {
    state: { products }
  } = useCart();
  cartLogic();
<<<<<<< HEAD
  const calculateTotal = () => (Number(getSubtotal(products).substring(1))
    + Number(shippingFee)).toFixed(2);
=======
  setTotal(Number(getSubtotal(products).substring(1)));
>>>>>>> 58a9b3b1ce0b055ad236031baf92d3284bf28d58
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
          <p>{getSubtotal(products) }</p>
        </div>
        <div>
          <p>
            Shipping Fee
          </p>
        </div>
        <div className={styles.price}>
          <p>
            $
            { shippingFee }
          </p>
        </div>
        <div>
          <p>Total</p>
        </div>
        <div className={styles.price}>
          <p>
            $
            {calculateTotal()}
          </p>

        </div>
      </div>
    </>
  );
};
export default ReviewOrderWidget;
