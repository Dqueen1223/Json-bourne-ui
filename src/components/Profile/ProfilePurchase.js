import React from 'react';
import './ProfilePage.css';
import PurchaseItem from './PurchaseItem';
// import fetchPurchaseItem from './profileProductService';

const ProfilePurchase = ({ purchases, totalPrice }) => {
  // const [newPurchase, setNewPurchase] = useState({});
  // const [itemPurchaseList, setItemPurchaseList] = useState([]);
  console.log({ purchases });
  // console.log(cost);
  return (
    <div className="purchases">
      <div className="purchaseTotal">
        purchaseTotal:
        {totalPrice}
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
};
export default ProfilePurchase;
