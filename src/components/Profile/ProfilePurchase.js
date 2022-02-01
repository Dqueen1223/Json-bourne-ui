import React from 'react';
import { getSubtotal } from '../checkout-page/ReviewOrderWidgetService';

const ProfilePurchase = ({ purchases }) => {
  console.log('test');
  console.log({ purchases });
  const purchasePrice = getSubtotal(purchases.lineItems);
  console.log(purchasePrice);
  return (
    <div>
      <div className="purchaseTotal">
        {purchasePrice}
      </div>
      <div className="productsCollapsible">
        <div className="orderDate">
          {purchases.orderDate}
        </div>
      </div>
    </div>
  );
};
export default ProfilePurchase;
