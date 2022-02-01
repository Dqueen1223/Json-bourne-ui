import React from 'react';
import { getSubtotal } from '../checkout-page/ReviewOrderWidgetService';
import './ProfilePage.css';

const ProfilePurchase = ({ purchases }) => {
  console.log('test');
  console.log({ purchases });
  const purchasePrice = getSubtotal(purchases.lineItems);
  console.log(purchasePrice);
  return (
    <div className="purchases">
      <div className="purchaseTotal">
        {purchasePrice}
      </div>
      <div className="orderDate">
        {purchases.orderDate}
      </div>
      <div className="productsCollapsible">
        <div className="itemName">
          itemName
        </div>
        <div className="itemQuantity">
          itemQuantity
          {purchases.lineItems.map((purchaseItems) => (
            <div key={purchaseItems.id}>
              {purchaseItems.productId}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProfilePurchase;
