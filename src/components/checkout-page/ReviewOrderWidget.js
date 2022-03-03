import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import OrderItem from './OrderItem';
import { getSubtotal } from './ReviewOrderWidgetService';
import styles from './ReviewOrderWidget.module.css';
import cartLogic from './cartLogic';
import PromoItem from '../form/PromoForm';
import getPromoDiscount from './PromoFormService';

/**
 * @name ReviewOrderWidget
 * @description Displays order items and subtotal
 * @return component
 */
const ReviewOrderWidget = ({ setTotal, shippingFee }) => {
  const {
    state: { products }
  } = useCart();
  cartLogic();
  const calculateTotal = () => {
    const totalVal = (Number(getSubtotal(products).substring(1))
      + Number(shippingFee)).toFixed(2);
    setTotal(Number(totalVal));
    return totalVal;
  };
  const [promoValue, setPromoValue] = React.useState('');
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState(false);
  const [discountObject, setDiscountObject] = React.useState({});
  const onPromoChange = (e) => {
    setPromoValue(e.target.value);
  };
  const onPromoBlur = () => {
    if (promoValue !== '') {
      getPromoDiscount(promoValue, setDiscountObject, setError);
    }
  };
  React.useEffect(() => {
    if (Object.keys(discountObject).length !== 0
      && (discountObject.code === null || discountObject.code === undefined)) {
      setError('Invalid code');
    } else {
      setError('');
      setSuccess(true);
    }
  }, [discountObject]);
  return (
    <>
      {products.length === 0
        && (
        <div className="returnProductDiv">
          <p>You have no products in your cart</p>
          <Link to="/" className={styles.returnProductLink}>
            Click here to continue shopping
          </Link>
        </div>
        )}
      {products.map(({
        price, title, description, quantity, imageSrc
      }) => (
        <OrderItem
          key={title}
          price={price}
          title={title}
          description={description}
          quantity={quantity}
          image={imageSrc}
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
          <PromoItem
            onChange={onPromoChange}
            onBlur={onPromoBlur}
            value={promoValue}
            id="promo"
            label="Promo code"
            placeholder="Put promo code here!"
            type="text"
            error={error}
            success={success}
          />
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
