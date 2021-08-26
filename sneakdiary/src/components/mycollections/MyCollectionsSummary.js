import moment from 'moment'

const MyCollectionsSummary = ({mycollection}) => {
  return (
    <div className="col s12 m6">
      <div className="card horizontal mycollections-summary">
        <div class="card-image">
          <img
            class="responsive-img"
            src="https://upload.wikimedia.org/wikipedia/commons/2/25/Icon-round-Question_mark.jpg"
            alt="sneaker"
          ></img>
        </div>
        <div class="card-stacked">
          <div className="card-content blue-grey-text text-darken-3">
            <span className="card-title">{mycollection.sneakerName}</span>
            <p><b>Size</b>: {mycollection.size}</p>
            <p><b>Date of Purchase</b>: {moment(mycollection.dateOfPurchase).format('L')}</p>
            <p><b>Purchase Price</b>: {mycollection.purchasePrice} €</p>
            <p><b>Selling Price</b>: {mycollection.sellingPrice} €</p>
            <p><b>Sold Price</b>: {mycollection.soldPrice} €</p>
          </div>
          <div class="card-action">
            <a href="#">Update</a>
            <a href="#">Delete</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCollectionsSummary;
