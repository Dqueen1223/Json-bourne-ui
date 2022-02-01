import React from 'react';
import './ProfilePage.css';
import PurchaseItem from './PurchaseItem';
import TotalPrice from './TotalPrice';
// import fetchPurchaseItem from './profileProductService';

const ProfilePurchase = ({ purchases }) => {
  // const [newPurchase, setNewPurchase] = useState({});
  // const [itemPurchaseList, setItemPurchaseList] = useState([]);
  console.log({ purchases });
  // console.log(cost);
  return (
    <div className="purchases">
      <div className="purchaseTotal">
        purchaseTotal
      </div>
      <div className="orderDate">
        {purchases.orderDate}
      </div>
      <div className="productsCollapsible">
        {purchases.lineItems.map((purchaseItems) => (
          <div key={purchaseItems.id}>
            <PurchaseItem item={purchaseItems} totalPrice={TotalPrice(purchases)} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProfilePurchase;
