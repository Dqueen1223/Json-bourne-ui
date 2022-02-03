import React from 'react';
import './ProfilePage.css';
import PurchaseItem from './PurchaseItem';

const ProfilePurchase = ({ purchases }) => (
  <div className="purchases">
    <div className="purchaseTotal">
      purchaseTotal:
      {purchases.totalCost}
    </div>
    <div className="orderDate">
      {purchases.orderDate}
    </div>
    <div className="productsCollapsible">
      {purchases.lineItems.map((purchaseItems) => (
        <div key={purchaseItems.id}>
          <PurchaseItem item={purchaseItems} />
        </div>
      ))}
    </div>
  </div>
);
export default ProfilePurchase;
