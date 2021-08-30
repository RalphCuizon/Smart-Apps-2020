import moment from 'moment'
import sneaker from "../../img/sneaker.png"

const MyCollectionsSummary = ({mycollection}) => {
  return (
    <div>
    <div className="col s12 m6">
      <div className="card small horizontal mycollections-summary">
        <div className="card-image">
          <img
            className="responsive-img"
            src={sneaker}
            alt="sneaker"
          ></img>
        </div>
        <div class="card-stacked">
          <div className="card-content blue-grey-text text-darken-3">
            <h6><b>{mycollection.sneakerName}</b></h6>
            <p><b>Size</b>: {mycollection.size}</p>
            <p><b>Date of Purchase</b>: {moment(mycollection.dateOfPurchase).format('L')}</p>
            <p><b>Purchase Price</b>: {mycollection.purchasePrice} €</p>
            <p><b>Selling Price</b>: {mycollection.sellingPrice} €</p>
            <p><b>Sold Price</b>: {mycollection.soldPrice} €</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MyCollectionsSummary;
